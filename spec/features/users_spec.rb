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
    select 'Fall 2015', :from => 'activeSemester'
    fill_in 'password', with: 'password'
    fill_in 'passwordConfirmation', with: 'password'
    fill_in 'gradePoints', with: '217.665'
    fill_in 'gradeUnits', with: '63'
    click_button 'Submit'
    wait_for_ajax
    expect(current_path).to eq '/confirmation'
  end

  context "can login" do
    before :each do
      visit '/'
      click_link 'login-nav'
      fill_in 'email', with: 'john.smith@example.com'
      fill_in 'password', with: 'password'
      click_button 'Log in'
      wait_for_ajax
      expect(current_path).to eq '/dashboard'
    end

    it "and edit profile" do
      edit_params = {
        name: 'John Snow', grade_points: '212',
        grade_units: '60', active_semester: 'Summer 2015'
      }
      
      find(:css, '#user-menu-link').click
      click_link 'Profile'
      fill_in 'name', with: edit_params[:name]
      fill_in 'gradePoints', with: edit_params[:grade_points]
      fill_in 'gradeUnits', with: edit_params[:grade_units]
      select edit_params[:active_semester], :from => 'activeSemester'

      click_button 'Save'
      visit current_path # Making sure javascript model persisted

      expect(find(:css, '#user-menu-link > span').text).to eq(edit_params[:name])
      expect(find(:id, 'name').value).to eq('John Snow')
      expect(find(:id, 'gradePoints').value).to eq(edit_params[:grade_points])
      expect(find(:id, 'gradeUnits').value).to eq(edit_params[:grade_units])
      expect(find(:id, 'activeSemester').value).to eq(edit_params[:active_semester])
    end

    xit "and change password" do
    end

    xit "and recieve an request" do
    end

    xit "and accept an received request" do
    end

    xit "and submit feedback" do
    end

  end

end
