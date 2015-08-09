require 'rails_helper'

describe "Users", type: :feature, :js => true do
  before :each do
    ['Spring 2015', 'Summer 2015', 'Fall 2015'].each do |name|
      Semester.create(name: name)
    end
    user = User.create(name: 'John Smith', email: 'john.smith@example.com', password: 'password', active_semester: 'Spring 2015')
    user.confirm
  end

  it "can register" do
    visit '/'
    click_link 'register'
    fill_in 'name', with: 'John Doe'
    fill_in 'email', with: 'john.doe@example.com'
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
    visit '/'
    click_link 'login-nav'
    fill_in 'email', with: 'john.smith@example.com'
    fill_in 'password', with: 'password'
    click_button 'Log in'
    wait_for_ajax
    expect(current_path).to eq '/dashboard'
  end

  xit "can edit profile" do
  end

  xit "can change password" do
  end

  xit "can recieve an request" do
  end

  xit "can accept an received request" do
  end

  xit "can submit feedback" do
  end

end
