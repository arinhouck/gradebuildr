class GradesController < ApplicationController

    def index
      @grades = User.find(params[:user_id]).grades
      render json: @grades
    end

    def show
      @grade = Grade.find(params[:id])
      render json: @grade
    end

    def update
      @grade = Grade.find(params[:id])
      if @grade.update_attributes(params[:grade])
        render json: @grade
      else
        render json: @grade.errors, status: 500
      end
    end

    def create
      @grade = Grade.new(params[:grade])

      if @grade.save
        render json: @grade, status: :created
      else
        render json: @grade.errors, status: 500
      end
    end

end
