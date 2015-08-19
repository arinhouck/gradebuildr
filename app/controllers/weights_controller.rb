class WeightsController < ApplicationController
  before_filter :authenticate
  before_filter :require_permission, only: :show

  def show
    @weight = Weight.find(params[:id])
    render json: @weight
  end

  def update
    @weight = Weight.find(params[:id])
    if @weight.update_attributes(weight_params)
      render json: @weight
    else
      render json: @weight.errors, status: 500
    end
  end

  def create
    @weight = Weight.new(weight_params)

    if @weight.save
      render json: @weight, status: :created
    else
      render json: @weight.errors, status: 500
    end
  end

  def destroy
    @weight = Weight.find(params[:id])
    @weight.destroy
    render json: @weight, status: 200
  end

  private

  def weight_params
    params.require(:weight).permit(:name, :percentage, :course_id, :user_id)
  end

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end

  def require_permission
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token) == Weight.find(params[:id]).course.user || Weight.find(params[:id]).course.user.directors.include?(User.find_by(authentication_token: token))
    end
  end

end
