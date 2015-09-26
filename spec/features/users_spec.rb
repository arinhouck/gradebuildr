require 'rails_helper'

describe "Users", type: :feature, :js => true do
  before :each do
    ['Spring 2015', 'Summer 2015', 'Fall 2015'].each do |name|
      Semester.create(name: name)
    end
    @director = User.create(first_name: 'Director', last_name: '1', email: 'organization@example.com', organization: 'Frat', account_type: 'organization', password: 'password', active_semester: 'Spring 2015')
    @director.confirm
    @student = User.create(first_name: 'Student', last_name: '1', email: 'student@example.com', password: 'password', account_type: 'student', active_semester: 'Fall 2015', grade_points: 167, grade_units: 44)
    @student.confirm
  end

  it "can register as student" do
    visit '/'
    click_link 'register'
    click_button 'Continue'
    fill_in 'firstName', with: 'John'
    fill_in 'lastName', with: 'Doe'
    fill_in 'gradePoints', with: '217.665'
    fill_in 'gradeUnits', with: '63'
    fill_in 'email', with: 'john.doe@example.com'
    select 'Fall 2015', :from => 'activeSemester'
    fill_in 'password', with: 'password'
    fill_in 'passwordConfirmation', with: 'password'
    click_button 'Submit'

    wait_for_ajax
    expect(current_path).to eq '/confirmation'
    student = User.find_by_email('john.doe@example.com')
    expect(student.account_type).to eq('student')
    expect(student.has_role? :director).to eq(false)
  end

  it "can register as organization" do
    visit '/'
    click_link 'register'
    find(:css, 'input[value=organization]').click
    click_button 'Continue'
    fill_in 'firstName', with: 'John'
    fill_in 'lastName', with: 'Doe'
    fill_in 'organization', with: 'Gradebuildr'
    fill_in 'email', with: 'john.doe@example.com'
    select 'Fall 2015', :from => 'activeSemester'
    fill_in 'password', with: 'password'
    fill_in 'passwordConfirmation', with: 'password'
    click_button 'Submit'

    wait_for_ajax
    expect(current_path).to eq '/confirmation'
    organization = User.find_by_email('john.doe@example.com')
    expect(organization.account_type).to eq('organization')
    expect(organization.has_role? :director).to eq(true)
    expect(organization.groups.as(:director).length).to eq(1)
  end

  context "can login as organization" do
    before :each do
      visit '/'
      click_link 'login-nav'
      login('organization@example.com', 'password')
      expect(current_path).to eq '/dashboard'
    end

    it "and edit profile" do
      edit_params = {
        first_name: 'John', last_name: 'Snow',
        organization: 'LLC', active_semester: 'Summer 2015'
      }

      open_user_menu
      click_button 'Profile'

      fill_in 'firstName', with: edit_params[:first_name]
      fill_in 'lastName', with: edit_params[:last_name]
      fill_in 'organization', with: edit_params[:organization]
      select edit_params[:active_semester], :from => 'activeSemester'

      click_button 'Save'
      visit current_path # Making sure javascript model persisted

      expect(find(:css, '#user-menu-link > span').text).to eq(edit_params[:first_name])
      expect(find(:id, 'firstName').value).to eq(edit_params[:first_name])
      expect(find(:id, 'lastName').value).to eq(edit_params[:last_name])
      expect(find(:id, 'organization').value).to eq(edit_params[:organization])
      expect(find(:id, 'activeSemester').value).to eq(edit_params[:active_semester])
    end

    it "and change password" do
      edit_params = {
        password: 'password', password_confirmation: 'password'
      }

      open_user_menu
      click_button 'Profile'

      click_link 'Change Password'
      fill_in 'password', with: 'secretpassword'
      fill_in 'passwordConfirmation', with: 'secretpassword'
      click_button 'Save'

      sleep(5) # Wait for growl to move

      open_user_menu
      click_button 'Log out'


      click_link 'login-nav'
      login('organization@example.com', 'password')
      expect(current_path).to eq('/')

      sleep(5) # Wait for growl to move

      login('organization@example.com', 'secretpassword')
      expect(current_path).to eq('/dashboard')
    end

    xit "and can view student analytics" do

    end

    xit "and can view individual student" do

    end

  end

  context "can login as student" do
    before :each do
      student_data(@student)

      visit '/'
      click_link 'login-nav'
      login('student@example.com', 'password')
      expect(current_path).to eq '/dashboard'
    end

    it "and submit feedback" do
      body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit turpis massa, quis elementum mi ultrices a.'

      click_link 'Feedback'
      fill_in 'body', with: body
      click_button 'Send'
      wait_for_ajax

      expect(Feedback.all.length).to eq(1)
      feedback = Feedback.first
      expect(feedback.body).to eq(body)
      expect(feedback.email).to eq(@student.email)
    end

    it "and view dashboard analytics" do
      expect(find(:id, 'course-count').text.to_i).to eq(@student.courses.length)
      expect(find(:id, 'grade-count').text.to_i).to eq(@student.grades.length)
      expect(find(:id, 'semester-gpa').text.to_f).to eq(3.33)
      expect(find(:id, 'cumulative-gpa').text.to_f).to eq(3.74)
    end

    it "and can view courses on index" do
      click_link 'Courses'
      expect(all(:css, '.table tbody tr').length).to eq(@student.courses.length)
    end

    it "and create a course" do
      course_params = {
        subject: 'MAT', number: '101',
        credit_hours: '3', semester: 'Fall 2015',
        grading_scale: 'Plus', weights: [
          { name: 'Assignments', percentage: 20 },
          { name: 'Quizzes', percentage: 20 },
          { name: 'Midterm', percentage: 20 },
          { name: 'Final', percentage: 40 }
        ]
      }
      click_link 'Courses'
      click_link 'New Course'

      fill_in_course(course_params)

      click_button 'New'
      columns = first(:css, 'tbody tr').all(:css, 'td')
      expect(columns[0].text).to eq(course_params[:subject] + ' ' + course_params[:number])
      expect(columns[1].text).to eq(course_params[:credit_hours])
      expect(columns[2].text).to eq('100%') # Current Grade
      expect(columns[3].text).to eq('A+') # Letter Grade
      expect(columns[4].text).to eq(course_params[:grading_scale])
      expect(columns[5].text).to eq(course_params[:semester])
      expect(columns[6].text.to_i).to eq(course_params[:weights].length)
    end

    it "and edit a course" do
      course_params = {
        subject: 'CSE', number: '101',
        credit_hours: '3', semester: 'Fall 2015',
        grading_scale: 'Minus', weights: [
          { name: 'Assignments', percentage: 20 },
          { name: 'Quizzes', percentage: 20 },
          { name: 'Midterm', percentage: 60 }
        ]
      }

      click_link 'Courses'
      wait_for_ajax

      first(:css, '.edit-btn').click

      delete_all_weights
      fill_in_course(course_params)
      click_button 'Save'


      within(:css, 'tbody tr:nth-child(1)') do
        columns = all(:css, 'td')
        expect(columns[0].text).to eq(course_params[:subject] + ' ' + course_params[:number])
        expect(columns[1].text).to eq(course_params[:credit_hours])
        # expect(columns[2].text).to eq('93.20%') # Current Grade
        expect(columns[3].text).to eq('A') # Letter Grade
        expect(columns[4].text).to eq(course_params[:grading_scale])
        expect(columns[5].text).to eq(course_params[:semester])
        expect(columns[6].text.to_i).to eq(course_params[:weights].length)
      end

    end

    it "and delete a course" do
      click_link 'Courses'
      wait_for_ajax

      first(:css, '.fa-trash').click
      rows = all(:css, '.table tbody tr')
      expect(rows.length).to eq(1)
      visit current_path # Check delete persists on refresh
      wait_for_ajax

      rows = all(:css, '.table tbody tr')
      expect(rows.length).to eq(1)
      expect(first(:css, '.table tbody td').text).to eq('EEE 230')
    end

    it "and can view grades on index" do
      click_link 'Grades'
      expect(all(:css, '.table tbody tr').length).to eq(@student.grades.length)
    end

    xit "and can view correct courses on grade show page" do

    end

    xit "and can view correct weights on grade show page" do

    end

    it "and create multiple grades" do
      grades = [
        {name: 'Testing #1', weight: 'Assignments', score: '5', total: '10'},
        {name: 'Testing #2', weight: 'Assignments', score: '9', total: '10'},
        {name: 'Quiz #1', weight: 'Quizzes', score: '11.2', total: '15'}
      ]
      click_link 'Grades'
      click_link 'New Grade'
      select 'EEE 230', from: 'select-course'
      wait_for_ajax

      grades.each_with_index do |grade, i|
        find(:css, '#add-grade').click if i != 0
        all(:css, 'input[name=name]')[i].set(grade[:name])
        all(:css, '.grade-weight')[i].select(grade[:weight])
        all(:css, 'input[name=score]')[i].set(grade[:score])
        all(:css, 'input[name=total]')[i].set(grade[:total])
      end
      click_button 'New'

      grades = grades.reverse # Reverse order for assertions

      all(:css, 'tbody tr')[0..2].each_with_index do |row, i|
        columns = row.all(:css, 'td')
        expect(columns[0].text).to eq(grades[i][:name])
        expect(columns[1].text).to eq('EEE 230')
        expect(columns[2].text).to eq('Fall 2015')
        expect(columns[3].text).to eq(grades[i][:score] + ' /' + grades[i][:total])
        expect(columns[5].text).to include(grades[i][:weight])
      end
    end

    it "and edit a grade" do
      grade = {
        name: 'Edited #1', weight: 'Assignments', score: '1', total: '10'
      }

      click_link 'Grades'
      wait_for_ajax

      first(:css, '.edit-btn').click
      fill_in 'name', with: grade[:name]
      find(:css, '.grade-weight').select(grade[:weight])
      fill_in 'score', with: grade[:score]
      fill_in 'total', with: grade[:total]

      click_button 'Save'
      wait_for_ajax

      within(:css, 'tbody tr:nth-child(1)') do
        columns = all(:css, 'td')
        expect(columns[0].text).to eq(grade[:name])
        expect(columns[1].text).to eq('MAT 343') # Seeded as first
        expect(columns[2].text).to eq('Fall 2015')
        expect(columns[3].text).to eq(grade[:score] + ' /' + grade[:total])
        expect(columns[4].text).to eq('0.33%')
        expect(columns[5].text).to include(grade[:weight])
      end
    end

    it "and delete a grade" do
      click_link 'Grades'
      wait_for_ajax

      first(:css, '.fa-trash').click
      expect(all(:css, 'tbody tr').length).to eq(7)
      visit current_path # Check delete persists on refresh
      wait_for_ajax

      expect(all(:css, 'tbody tr').length).to eq(7)
      expect(first(:css, 'tbody td').text).to eq('Exam 1')
    end

    it "and filter by semester on courses" do
      @new_semester_courses = [
        Course.create(user_id: @student.id, subject: 'CSE', number: 101, credit_hours: 3, grading_scale: 'Minus', semester: 'Spring 2015'),
        Course.create(user_id: @student.id, subject: 'IEE', number: 380, credit_hours: 3, grading_scale: 'Plus', semester: 'Spring 2015')
      ]
      visit current_path

      click_link 'Courses'
      find(:css, '.caret').click
      all(:css, '.dropdown-menu a').each { |option| option.click if option.text == 'Spring 2015' }
      expect(all(:css, 'tbody tr').length).to eq(2)
    end

    xit "and filter on grades" do

    end

    xit "and change between pagination" do

    end

  end

end
