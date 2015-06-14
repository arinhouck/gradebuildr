class WeightsController < ApplicationController

  def show
    @weight = Weight.find(params[:id])
    render json: @weight
  end

  def update
    @weight = Weight.find(params[:id])
    if @weight.update_attributes(params[:weight])
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

  private

  def weight_params
    params.require(:weight).permit(:name, :percentage, :course_id, :user_id)
  end

end
