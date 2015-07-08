class PasswordsController < Devise::PasswordsController

  def create
    super do |user|
      email = params[:user][:email]
      if successfully_sent?(user)
        render json: {message: "Instructions have been sent to #{email}"}, status: :ok
      else
        render json: {message: "Can't find user by #{email}"}, status: 404
      end
      return
    end
  end

  def update
    super do |user|
      if user.errors.empty?
        render json: {message: "Sucessfully changed password."}, status: :ok
      else
        render json: {errors: user.errors}, status: 500
      end
      return
    end
  end

end
