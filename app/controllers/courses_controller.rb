class CoursesController < ApplicationController

  def index
    @courses = Course.all
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

end
