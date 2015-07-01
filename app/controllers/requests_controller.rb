class RequestsController < ApplicationController
  before_filter :authenticate

  def create
    @request = Request.new(request_params)
    if @request.save
      render json: @request, status: :created
    else
      render json: { errors: @request.errors.full_messages }, status: 500
    end
  end

  def show
    @request = Request.find(params[:id])
    render json: @request
  end

  def show
    @request = Request.find(params[:id])
    render json: @request
  end

  def accept
    if Request.accept(params[:director_id], params[:student_id])
      render json: {}, status: 200
    else
      render json: {error: 'Error'}, status: 500
    end
  end

  def destroy
    @request = Request.find(params[:id])
    @request.destroy
    render json: @request, status: 200
  end

  private

  def request_params
    params.require(:request).permit(:director_id, :student_id, :accepted)
  end

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end


end
