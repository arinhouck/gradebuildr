class UsersController < ApplicationController
  # before_filter :authenticate

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :grade_points, :grade_units, :active_semester, :password, :password_confirmation)
  end

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end

end
