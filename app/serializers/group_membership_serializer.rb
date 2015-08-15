class GroupMembershipSerializer < ActiveModel::Serializer
  attributes :id, :group_id, :group_name
end
