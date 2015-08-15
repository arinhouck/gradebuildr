namespace :demo do
  desc "Create demo users"
  task create: :environment do
    puts "Loading demo users..."
    users = [
      User.create(first_name: 'Sparky', last_name: '1', email: 'sparky@example.com', password: 'password', active_semester: 'Summer 2015', account_type: 'organization', organization: 'Gradebuildr'),
      User.create(first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 167, grade_units: 44, account_type: 'student'),
      User.create(first_name: 'Arnold', last_name: 'Smith', email: 'arnold@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 132, grade_units: 44, account_type: 'student'),
      User.create(first_name: 'George', last_name: 'Davis', email: 'george@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 153, grade_units: 45, account_type: 'student'),
      User.create(first_name: 'Jake', last_name: 'Miller', email: 'jake@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 161, grade_units: 47, account_type: 'student'),
      User.create(first_name: 'Andrew', last_name: 'Williams', email: 'andrew@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 178, grade_units: 44, account_type: 'student')
    ]

    code = users[0].groups.first.code

    users.each_with_index do |user, i|
      user.confirm!
      Group.find_by_code(code).add(user, as: 'student') if i != 0

      courses = [
        Course.create(user_id: user.id, subject: 'EEE', number: Random.new.rand(101..394), credit_hours: 3, grading_scale: 'Plus', semester: 'Summer 2015'),
        Course.create(user_id: user.id, subject: 'CSE', number: Random.new.rand(101..394), credit_hours: 3, grading_scale: 'Regular', semester: 'Summer 2015'),
        Course.create(user_id: user.id, subject: 'COM', number: Random.new.rand(101..394), credit_hours: 3, grading_scale: 'Plus/Minus', semester: 'Summer 2015'),
        Course.create(user_id: user.id, subject: 'GLG', number: Random.new.rand(101..394), credit_hours: 3, grading_scale: 'Regular', semester: 'Summer 2015'),
        Course.create(user_id: user.id, subject: 'GLG', number: Random.new.rand(101..394), credit_hours: 1, grading_scale: 'Plus/Minus', semester: 'Summer 2015'),
        Course.create(user_id: user.id, subject: 'MAT', number: Random.new.rand(101..394), credit_hours: 3, grading_scale: 'Plus/Minus', semester: 'Summer 2015')
      ]
      courses.each do |course|
        weights = [
          Weight.create(course_id: course.id, name: 'Assignments', percentage: 30),
          Weight.create(course_id: course.id, name: 'Quizzes', percentage: 10),
          Weight.create(course_id: course.id, name: 'Midterm Exams', percentage: 40),
          Weight.create(course_id: course.id, name: 'Final Exam', percentage: 20)
        ]

        weights.each do |weight|
          grades = [
            Grade.create(user_id: user.id, course_id: course.id, weight_id: weight.id, name: "#{weight.name} 1", score: Random.new.rand(8..10), score_total: Random.new.rand(10..12)),
            Grade.create(user_id: user.id, course_id: course.id, weight_id: weight.id, name: "#{weight.name} 2", score: Random.new.rand(8..10), score_total: Random.new.rand(10..12)),
            Grade.create(user_id: user.id, course_id: course.id, weight_id: weight.id, name: "#{weight.name} 3", score: Random.new.rand(8..10), score_total: Random.new.rand(10..12)),
            Grade.create(user_id: user.id, course_id: course.id, weight_id: weight.id, name: "#{weight.name} 4", score: Random.new.rand(8..10), score_total: Random.new.rand(10..12)),
            Grade.create(user_id: user.id, course_id: course.id, weight_id: weight.id, name: "#{weight.name} 5", score: Random.new.rand(8..10), score_total: Random.new.rand(10..12))
          ]
        end
      end
    end

    puts "Finished"
  end

  desc "Delete all demo users"
  task delete: :environment do
    users = ['sparky@example.com', 'john@example.com', 'arnold@example.com', 'george@example.com', 'jake@example.com', 'andrew@example.com']
    users.each do |email|
      User.find_by_email(email).destroy
    end
  end

  desc "Reset demo users"
  task reset: :environment do
    Rake::Task["demo:delete"].invoke
    Rake::Task["demo:create"].invoke
  end



end
