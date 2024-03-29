module FeatureHelper
  def login(email, password)
    fill_in 'email', with: email
    fill_in 'password', with: password
    click_button 'Log in'
    wait_for_ajax
  end

  def open_user_menu
    find(:css, '#user-menu-link').click
  end

  def delete_all_weights
    all(:css, '.remove-weight').each_with_index do |element, i|
      if i != 0
        element.click
        click_button 'Yes'
      end
    end
  end

  def fill_in_course(course_params)
    fill_in 'subject', with: course_params[:subject]
    fill_in 'subjectNumber', with: course_params[:number]
    fill_in 'creditHours', with: course_params[:credit_hours]
    select course_params[:semester], from: 'semester'
    select course_params[:grading_scale], from: 'grading-scale'

    course_params[:weights].each_with_index do |weight, i|
      find(:id, 'add-weight').click if i != 0
      all(:css, '.weight-name')[i].set(weight[:name])
      all(:css, '.weight-percentage')[i].set(weight[:percentage])
    end
  end

  def student_data(user)
    courses = [
      Course.create(user_id: user.id, subject: 'EEE', number: 230, credit_hours: 3, grading_scale: 'Plus', semester: 'Fall 2015'),
      Course.create(user_id: user.id, subject: 'MAT', number: 343, credit_hours: 3, grading_scale: 'Plus/Minus', semester: 'Fall 2015')
    ]

    weights = [
      Weight.create(course_id: courses[0].id, name: 'Assignments', percentage: 70),
      Weight.create(course_id: courses[0].id, name: 'Quizzes', percentage: 30),
      Weight.create(course_id: courses[1].id, name: 'Assignments', percentage: 20),
      Weight.create(course_id: courses[1].id, name: 'Exams', percentage: 80)
    ]

    grades = [
      Grade.create(user_id: user.id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 1', score: 10, score_total: 10),
      Grade.create(user_id: user.id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 2', score: 10, score_total: 10),
      Grade.create(user_id: user.id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 1', score: 6.6, score_total: 10),
      Grade.create(user_id: user.id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 2', score: 9, score_total: 10),
      Grade.create(user_id: user.id, course_id: courses[1].id, weight_id: weights[2].id, name: 'Assignment #1', score: 15, score_total: 25),
      Grade.create(user_id: user.id, course_id: courses[1].id, weight_id: weights[2].id, name: 'Assignment #2', score: 18, score_total: 25),
      Grade.create(user_id: user.id, course_id: courses[1].id, weight_id: weights[3].id, name: 'Exam 1', score: 91, score_total: 100),
      Grade.create(user_id: user.id, course_id: courses[1].id, weight_id: weights[3].id, name: 'Exam 2', score: 77, score_total: 100),
    ]
  end
end

RSpec.configure do |config|
  config.include FeatureHelper, type: :feature
end
