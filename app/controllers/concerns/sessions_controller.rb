class SessionsController < Devise::SessionsController
  require 'active_support/core_ext'

  def create
    user = User.find_for_database_authentication(email: params[:user][:email])

    if user && user.valid_password?(params[:user][:password])
      sign_in(user)
      data = {
        token: user.authentication_token,
        id: user.id,
        email: user.email,
        name: user.name,
        gradePoints: user.grade_points,
        gradeUnits: user.grade_units
      }
      render json: data, status: 201
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

end
