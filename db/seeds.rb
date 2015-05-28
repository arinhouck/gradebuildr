# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if !User.any?
  User.create(name: 'Arin', email: 'arinhouck@gmail.com', password: 'password')
end

if !Course.any?
  Course.create(user_id: 1, subject: 'CSE', number: 230, creditHours: 3, gradingScale: 'Plus')
end
