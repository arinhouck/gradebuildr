class CoursesController < ApplicationController

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
    if @course.update_attributes(params[:course])
      render json: @course
    else
      render json: @course.errors, status: 500
    end
  end

  def create
    @course = Course.new(params[:course])

    if @course.save
      render json: @course, status: :created
    else
      render json: @course.errors, status: 500
    end
  end

  # private
  #
  # def course_params
  #   params.require(:course).permit(:subject, :number, :credit_hours, :grading_scale, :user_id)
  # end

end
