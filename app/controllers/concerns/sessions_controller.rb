class SessionsController < Devise::SessionsController

def create
  user = User.find_for_database_authentication(email: params[:user][:email])

  if user && user.valid_password?(params[:user][:password])
    sign_in(user)
    data = {
      token: user.authentication_token,
      email: user.email,
      name: user.name
    }
    render json: data, status: 201
  else
    render json: { error: "Invalid email or password" }, status: :unauthorized
  end
end

end
