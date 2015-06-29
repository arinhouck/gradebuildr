class FeedbacksController < ApplicationController
  before_filter :authenticate

  def create
    @feedback = Feedback.new(feedback_params)

    if @feedback.save
      render json: @feedback, status: :created
    else
      render json: @feedback.errors, status: 500
    end
  end

  private

  def feedback_params
    params.require(:feedback).permit(:email, :body)
  end

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end

end
