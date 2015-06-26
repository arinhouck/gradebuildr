class CoursesController < ApplicationController
  before_filter :authenticate

  def index
    @courses = User.find(params[:user_id]).courses
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

end
