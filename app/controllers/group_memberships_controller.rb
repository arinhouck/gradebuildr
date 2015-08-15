class GroupMembershipsController < ApplicationController

  def remove
    user = User.find(params[:user_id])
    group = Group.find(params[:group_id])
    membership = GroupMembership.find_by_group_id(group.id)
    user.groups.destroy(group)
    render json: membership, status: :ok
  end

end
