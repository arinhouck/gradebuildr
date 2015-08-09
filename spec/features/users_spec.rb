require 'rails_helper'

describe "Users", type: :feature, :js => true do
  before :each do
    ['Spring 2015', 'Summer 2015', 'Fall 2015'].each do |name|
      Semester.create(name: name)
    end
  end

  it "can register" do
    visit '/'
    click_link 'register'
    fill_in 'name', with: 'John Doe'
    fill_in 'email', with: 'john@example.com'
    select 'Fall 2015', :from => "activeSemester"
    fill_in 'password', with: 'password'
    fill_in 'passwordConfirmation', with: 'password'
    fill_in 'gradePoints', with: '217.665'
    fill_in 'gradeUnits', with: '63'
    click_button 'Submit'
    wait_for_ajax
    expect(current_path).to eq '/confirmation'
  end

  it "can login" do
    user = User.create(name: 'John doe', email: 'john@example.com', password: 'password', active_semester: 'Spring 2015')
    user.confirm!
    visit '/'
    click_link 'login-nav'
    fill_in 'email', with: 'john@example.com'
    fill_in 'password', with: 'password'
    click_button 'Log in'
    wait_for_ajax
    expect(current_path).to eq '/dashboard'
  end
end
