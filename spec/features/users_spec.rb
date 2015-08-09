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
end
