class GradesController < ApplicationController
    before_filter :authenticate
    before_filter :require_permission, only: :show

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
      if @grade.update_attributes(grade_params)
        render json: @grade
      else
        render json: @grade.errors, status: 500
      end
    end

    def create
      @grade = Grade.new(grade_params)

      if @grade.save
        render json: @grade, status: :created
      else
        render json: @grade.errors, status: 500
      end
    end

    def destroy
      @grade = Grade.find(params[:id])
      @grade.destroy
      render json: @grade, status: 200
    end

    private

    def grade_params
      params.require(:grade).permit(:name, :weight_id, :user_id, :course_id, :score, :score_total)
    end

    def authenticate
      authenticate_or_request_with_http_token do |token, options|
        User.find_by(authentication_token: token)
      end
    end

    def require_permission
      authenticate_or_request_with_http_token do |token, options|
        User.find_by(authentication_token: token) == Grade.find(params[:id]).user || Grade.find(params[:id]).user.directors.include?(User.find_by(authentication_token: token))
      end
    end

end
