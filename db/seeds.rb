# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Load users"
User.delete_all
users = [
  User.create(name: 'Arin', email: 'arinhouck@gmail.com', password: 'password'),
  User.create(name: 'User', email: 'user@example.com', password: 'password')
]

puts "Load courses"
Course.delete_all
courses = [
  Course.create(user_id: users[0].id, subject: 'EEE', number: 230, creditHours: 3, gradingScale: 'Plus'),
  Course.create(user_id: users[0].id, subject: 'COM', number: 263, creditHours: 3, gradingScale: 'Plus/Minus'),
  Course.create(user_id: users[0].id, subject: 'GLG', number: 102, creditHours: 3, gradingScale: 'Regular'),
  Course.create(user_id: users[0].id, subject: 'GLG', number: 104, creditHours: 1, gradingScale: 'Plus/Minus'),
  Course.create(user_id: users[0].id, subject: 'MAT', number: 343, creditHours: 3, gradingScale: 'Plus/Minus')
]

puts "Load weights"
Weight.delete_all
weights = [
  Weight.create(course_id: courses[0].id, name: 'Assignments', percentage: 30),
  Weight.create(course_id: courses[0].id, name: 'Quizzes', percentage: 10),
  Weight.create(course_id: courses[0].id, name: 'Midterm 1', percentage: 18),
  Weight.create(course_id: courses[0].id, name: 'Midterm 2', percentage: 20),
  Weight.create(course_id: courses[0].id, name: 'Final Exam', percentage: 22)
]
