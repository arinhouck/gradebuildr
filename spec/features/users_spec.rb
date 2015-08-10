require 'rails_helper'

describe "Users", type: :feature, :js => true do
  before :each do
    ['Spring 2015', 'Summer 2015', 'Fall 2015'].each do |name|
      Semester.create(name: name)
    end
    @director = User.create(name: 'Director', email: 'director@example.com', password: 'password', active_semester: 'Spring 2015')
    @director.confirm
    @student = User.create(name: 'Student', email: 'student@example.com', password: 'password', active_semester: 'Fall 2015', grade_points: 167, grade_units: 44)
    @student.confirm
  end

  it "can register" do
    visit '/'
    click_link 'register'
    fill_in 'name', with: 'John Doe'
    fill_in 'email', with: 'john.doe@example.com'
    select 'Fall 2015', :from => 'activeSemester'
    fill_in 'password', with: 'password'
    fill_in 'passwordConfirmation', with: 'password'
    fill_in 'gradePoints', with: '217.665'
    fill_in 'gradeUnits', with: '63'
    click_button 'Submit'
    wait_for_ajax
    expect(current_path).to eq '/confirmation'
  end

  context "can login as director" do
    before :each do
      visit '/'
      click_link 'login-nav'
      login('director@example.com', 'password')
      expect(current_path).to eq '/dashboard'
    end

    it "and edit profile" do
      edit_params = {
        name: 'John Snow', grade_points: '212',
        grade_units: '60', active_semester: 'Summer 2015'
      }

      open_user_menu
      click_link 'Profile'

      fill_in 'name', with: edit_params[:name]
      fill_in 'gradePoints', with: edit_params[:grade_points]
      fill_in 'gradeUnits', with: edit_params[:grade_units]
      select edit_params[:active_semester], :from => 'activeSemester'

      click_button 'Save'
      visit current_path # Making sure javascript model persisted

      expect(find(:css, '#user-menu-link > span').text).to eq(edit_params[:name])
      expect(find(:id, 'name').value).to eq('John Snow')
      expect(find(:id, 'gradePoints').value).to eq(edit_params[:grade_points])
      expect(find(:id, 'gradeUnits').value).to eq(edit_params[:grade_units])
      expect(find(:id, 'activeSemester').value).to eq(edit_params[:active_semester])
    end

    it "and change password" do
      edit_params = {
        password: 'password', password_confirmation: 'password'
      }

      open_user_menu
      click_link 'Profile'

      click_link 'Change Password'
      fill_in 'password', with: 'secretpassword'
      fill_in 'passwordConfirmation', with: 'secretpassword'
      click_button 'Save'

      sleep(5) # Wait for growl to move

      open_user_menu
      click_button 'Log out'


      click_link 'login-nav'
      login('director@example.com', 'password')
      expect(current_path).to eq('/')

      sleep(5) # Wait for growl to move

      login('director@example.com', 'secretpassword')
      expect(current_path).to eq('/dashboard')
    end

    xit "and send a request to student" do

    end

    xit "and can't see student with unaccepted request" do

    end

    xit "and can view student analytics" do

    end

    xit "and can view individual student" do

    end

  end

  context "can login as student" do
    before :each do
      @request = Request.create({director_id: @director.id, student_id: @student.id})
      student_data(@student)

      visit '/'
      click_link 'login-nav'
      login('student@example.com', 'password')
      expect(current_path).to eq '/dashboard'
    end

    it "and accept a received request" do
      open_user_menu
      click_link 'Profile'
      click_link 'Received Requests'
      click_button 'accept'
      expect(page).to have_no_selector('#accept')
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

    xit "and create a course" do

    end

    xit "and edit a course" do

    end

    xit "and delete a course" do

    end

    xit "and create multiple grade" do

    end

    xit "and edit a grade" do

    end

    xit "and delete a grade" do

    end

    xit "and filter on courses" do

    end

    xit "and filter on grades" do

    end

    xit "and change between pagination" do

    end

  end

end
