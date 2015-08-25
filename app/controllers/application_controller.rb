class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session, if: :json_request?
  skip_before_action :verify_authenticity_token, if: :json_request?
  force_ssl :if => :needs_ssl_redirect?


  protected

  def needs_ssl_redirect?
    # Due to Cloudflare’s configuration,
    # the HTTPS ENV var is not set.
    # We’ll check for their custom header instead:
    !request.headers["HTTP_CF_VISITOR"].to_s.include?("https") && !%w(development test).include?(Rails.env)
  end

  def authenticate_user_from_token!
    authenticated = authenticate_with_http_token do |user_token, options|
        user_email = options[:email].presence
        user       = user_email && User.find_by_email(user_email)

        if user && Devise.secure_compare(user.authentication_token, user_token)
          sign_in user, store: false
        else
          render json: 'Invalid authorization.'
        end
      end

    if !authenticated
      render json: 'No authorization provided.'
    end
  end

  def json_request?
    request.format.json?
  end

end
