# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
if Rails.env.development?
  puts "Load users"
  User.destroy_all
  users = [
    User.create(first_name: 'Arin', last_name: 'Houck', email: 'arinhouck@gmail.com', password: 'password', active_semester: 'Spring 2015', account_type: 'organization', organization: 'Gradebuildr'),
    User.create(first_name: 'Example', last_name: 'User', email: 'user@example.com', password: 'password', active_semester: 'Spring 2015', account_type: 'student')
  ]
  users.each { |user| user.confirm! }
  code = users[0].groups.first.code
  Group.find_by_code(code).add(users[1], as: 'student')


  puts "Load courses"
  Course.destroy_all
  courses = [
    Course.create(user_id: users[1].id, subject: 'EEE', number: 230, credit_hours: 3, grading_scale: 'Plus', semester: 'Spring 2015'),
    Course.create(user_id: users[1].id, subject: 'CSE', number: 240, credit_hours: 3, grading_scale: 'Regular', semester: 'Spring 2015'),
    Course.create(user_id: users[1].id, subject: 'COM', number: 263, credit_hours: 3, grading_scale: 'Plus/Minus', semester: 'Spring 2015'),
    Course.create(user_id: users[1].id, subject: 'GLG', number: 102, credit_hours: 3, grading_scale: 'Regular', semester: 'Spring 2015'),
    Course.create(user_id: users[1].id, subject: 'GLG', number: 104, credit_hours: 1, grading_scale: 'Plus/Minus', semester: 'Spring 2015'),
    Course.create(user_id: users[1].id, subject: 'MAT', number: 343, credit_hours: 3, grading_scale: 'Plus/Minus', semester: 'Spring 2015')
  ]

  puts "Load weights"
  Weight.destroy_all
  weights = [
    Weight.create(course_id: courses[0].id, name: 'Assignments', percentage: 30),
    Weight.create(course_id: courses[0].id, name: 'Quizzes', percentage: 10),
    Weight.create(course_id: courses[0].id, name: 'Midterm Exams', percentage: 40),
    Weight.create(course_id: courses[0].id, name: 'Final Exam', percentage: 20)
  ]

  puts "Load grades"
  Grade.destroy_all
  grades = [
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 1', score: 10, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 2', score: 13, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 3', score: 18.5, score_total: 20),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 4', score: 10, score_total: 20),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 5', score: 8, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 6', score: 9, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Assignment 7', score: 10, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[0].id, name: 'Homework #2', score: 25, score_total: 30),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 1', score: 10, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 2', score: 9.5, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 3', score: 8.5, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 4', score: 9, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 5', score: 8, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 6', score: 8, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 7', score: 9, score_total: 10),
    #Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 8', score: 6.5, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 9', score: 11, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[1].id, name: 'Quiz 10', score: 11, score_total: 10),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[2].id, name: 'Midterm 1', score: 12, score_total: 14),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[2].id, name: 'Midterm 2', score: 12, score_total: 14),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[2].id, name: 'Midterm 3', score: 8, score_total: 12),
    Grade.create(user_id: users[1].id, course_id: courses[0].id, weight_id: weights[3].id, name: 'Final Exam', score: 14.5, score_total: 20)
  ]
end

puts "Load semesters"
Semester.delete_all
semesters = [
  Semester.create(name: 'Spring 2015'),
  Semester.create(name: 'Summer 2015'),
  Semester.create(name: 'Fall 2015')
]
