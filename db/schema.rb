# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150701004652) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "courses", force: :cascade do |t|
    t.string   "subject",       default: "", null: false
    t.string   "number"
    t.integer  "credit_hours"
    t.string   "grading_scale"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "user_id"
    t.string   "semester"
  end

  add_index "courses", ["user_id"], name: "index_courses_on_user_id", using: :btree

  create_table "feedbacks", force: :cascade do |t|
    t.string   "email"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grades", force: :cascade do |t|
    t.string   "name"
    t.integer  "course_id"
    t.float    "score"
    t.float    "score_total"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.integer  "weight_id"
  end

  add_index "grades", ["course_id"], name: "index_grades_on_course_id", using: :btree
  add_index "grades", ["user_id"], name: "index_grades_on_user_id", using: :btree
  add_index "grades", ["weight_id"], name: "index_grades_on_weight_id", using: :btree

  create_table "requests", force: :cascade do |t|
    t.integer  "director_id"
    t.integer  "student_id"
    t.boolean  "accepted",    default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "semesters", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",  null: false
    t.string   "encrypted_password",     default: "",  null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,   null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "authentication_token",   default: "",  null: false
    t.string   "name",                   default: "",  null: false
    t.float    "grade_points",           default: 0.0
    t.float    "grade_units",            default: 0.0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "active_semester"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "weights", force: :cascade do |t|
    t.string   "name"
    t.integer  "percentage"
    t.integer  "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "weights", ["course_id"], name: "index_weights_on_course_id", using: :btree

  add_foreign_key "courses", "users"
  add_foreign_key "grades", "courses"
  add_foreign_key "grades", "users"
  add_foreign_key "grades", "weights"
  add_foreign_key "weights", "courses"
end
