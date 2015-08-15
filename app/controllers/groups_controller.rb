class GroupsController < ApplicationController

  def join
    @group = Group.find_by_code(params[:code])

    if @group
      user = User.find(params[:user_id])
      @group.add(user, as: 'student')
      render json: user.group_memberships, status: :ok
    else
      render json: { error: 'Invalid invite code.' }, status: 500
    end
  end

end
