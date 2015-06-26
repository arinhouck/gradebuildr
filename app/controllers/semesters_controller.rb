class SemestersController < ApplicationController
  before_filter :authenticate

  def index
    @semesters = Semester.all
    render json: @semesters
  end

  private

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end
end
