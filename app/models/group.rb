class Group < ActiveRecord::Base
  groupify :group, members: [:users], default_members: :users

  before_create :generate_code

  private
  def generate_code
    self.code = SecureRandom.uuid
  end

end
