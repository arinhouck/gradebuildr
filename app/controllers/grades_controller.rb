class GradesController < ApplicationController
  before_filter :authenticate
  before_filter :require_permission_show, only: :show
  before_filter :require_permission_index, only: :index

  def index
    if !!(params[:page] && params[:per_page])
      @grades = User.find(params[:user_id]).grades.page(params[:page_number]).per(params[:per_page])
    else
      @grades = User.find(params[:user_id]).grades
    end
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
    render json: {}, status: 200
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
      @grade_user = Grade.find(params[:id]).user
      @user == @grade_user || @grade_user.directors.include?(@user)
    end
  end

end
