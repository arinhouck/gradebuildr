class CoursesController < ApplicationController
  before_filter :authenticate
  before_filter :require_permission_index, only: :index
  before_filter :require_permission_show, only: :show

  def index
    if !!(params[:page] && params[:per_page])
      @courses = User.find(params[:user_id]).courses.page(params[:page_number]).per(params[:per_page])
    else
      @courses = User.find(params[:user_id]).courses
    end
    render json: @courses
  end

  def show
    @course = Course.find(params[:id])
    render json: @course
  end

  def update
    @course = Course.find(params[:id])
    if @course.update_attributes(course_params)
      render json: @course
    else
      render json: @course.errors, status: 500
    end
  end

  def create
    @course = Course.new(course_params)

    if @course.save
      render json: @course, status: :created
    else
      render json: @course.errors, status: 500
    end
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    render json: @course, status: 200
  end

  private

  def course_params
    params.require(:course).permit(:subject, :number, :credit_hours, :grading_scale, :user_id, :semester)
  end

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end

  def require_permission_index
    authenticate_or_request_with_http_token do |token, options|
      @user = User.find_by(authentication_token: token)
      @student = User.find_by_id(params[:user_id])
      @user == @student || @student.directors.include?(@user)
    end
  end

  def require_permission_show
    authenticate_or_request_with_http_token do |token, options|
      @user = User.find_by(authentication_token: token)
      @course_user = Course.find(params[:id]).user
      @user == @course_user || @course_user.directors.include?(@user)
    end
  end

end
