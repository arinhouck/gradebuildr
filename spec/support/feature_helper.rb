module FeatureHelper
  def login(email, password)
    fill_in 'email', with: email
    fill_in 'password', with: password
    click_button 'Log in'
    wait_for_ajax
  end

  def open_user_menu
    find(:css, '#user-menu-link').click
  end
end

RSpec.configure do |config|
  config.include FeatureHelper, type: :feature
end
