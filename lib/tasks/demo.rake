namespace :demo do
  desc "Create demo users"
  task create: :environment do
    puts "Loading demo users..."
    users = [
      User.create(name: 'Sparky', email: 'sparky@example.com', password: 'password', active_semester: 'Summer 2015'),
      User.create(name: 'John Doe', email: 'john@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 167, grade_units: 44),
      User.create(name: 'Arnold Smith', email: 'arnold@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 132, grade_units: 44),
      User.create(name: 'George Davis', email: 'george@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 153, grade_units: 45),
      User.create(name: 'Jake Miller', email: 'jake@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 161, grade_units: 47),
      User.create(name: 'Andrew Williams', email: 'andrew@example.com', password: 'password', active_semester: 'Summer 2015', grade_points: 178, grade_units: 44)
    ]

    users[0].add_role :director
    (1..5).each_with_index do |val|
      Request.create(director_id: users[0].id, student_id: users[val].id)
      Request.accept(users[0].id, users[val].id)
    end


    users.each do |user|
      user.confirm!
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
