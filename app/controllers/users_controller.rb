class UsersController < ApplicationController
  before_filter :authenticate, except: [:create, :stripe_hook]
  skip_before_filter :verify_authenticity_token, only: :stripe_hook
  before_filter :is_director, only: :show_student

  def index
    @user = User
    if params[:email]
      @user = @user.where(email: params[:email])
    end
    @user = @user.all
    render json: @user
  end

  def process_payment
    @user = User.find(params[:user_id])
    if (@user.customer_id && !@user.subscription)
      # customer has no existing plans
      customer = Stripe::Customer.retrieve(@user.customer_id)
      customer.source = params[:token][:id]
      customer.email = params[:token][:email]
      customer.plan = params[:token][:plan]
      if customer.save
        @user.update_canceled_subscription(false)
      end
    elsif (@user.customer_id && @user.subscription)
      # has an active subscription to upgrade or downgrade subscription
      customer = Stripe::Customer.retrieve(@user.customer_id)
      customer.source = params[:token][:id]
      customer.email = params[:token][:email]
      customer.save
      subscription = customer.subscriptions.first
      subscription.plan = params[:token][:plan]
      subscription.proration_date = params[:token][:proration_date]
      if subscription.save
        @user.save_subscription(params[:token][:plan])
        @user.update_canceled_subscription(false)
      end
    else
      # First time buying a subscription
      customer = Stripe::Customer.create(
        :source => params[:token][:id], # obtained from Stripe.js
        :plan => params[:token][:plan],
        :email => params[:token][:email]
      )
      @user.save_customer(customer.id)
      @user.save_subscription(params[:token][:plan])
      @user.update_canceled_subscription(false)
    end

    render json: {message: 'Successfully processed payment.'}, status: :ok
  end

  def proration_price
    @user = User.find(params[:user_id])
    customer = Stripe::Customer.retrieve(@user.customer_id)
    proration_date = Time.now.to_i
    invoice = Stripe::Invoice.upcoming(customer: @user.customer_id, subscription: customer.subscriptions.first,
                                       subscription_plan: params[:plan], subscription_proration_date: proration_date)
    current_prorations = invoice.lines.data.select { |ii| ii.period.start == proration_date }
    cost = 0
    current_prorations.each do |p|
      cost += p.amount
    end
    render json: {cost: cost, proration_date: proration_date}, status: :ok
  end

  def cancel_subscription
    @user = User.find(params[:user_id])
    customer = Stripe::Customer.retrieve(@user.customer_id)
    customer.subscriptions.first.delete(:at_period_end => true)
    @user.update_canceled_subscription(true)
    render json: {message: 'Successfully canceled subscription.'}, status: :ok
  end

  def stripe_hook
    event = Stripe::Event.retrieve(params[:id])

    case event.type
    when 'charge.succeeded'
      @user = User.find_by_customer_id(event.data.object.customer)
      @user.add_role :director unless @user.has_role? :director
    when 'invoice.payment_succeeded'
      User.find_by_customer_id(event.data.object.customer).renew
    when 'invoice.payment_failed', 'customer.subscription.deleted'
      @user = User.find_by_customer_id(event.data.object.customer)
      @user.save_subscription(nil)
      @user.remove_role :director if @user.has_role? :director
    end
    render status: :ok, json: 'Success'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def show_student
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :grade_points, :grade_units, :active_semester, :password, :password_confirmation, :is_director, :active_until, :subscription, :canceled_subscription, :unconfirmed_email)
  end

  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token)
    end
  end

  def is_director
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(authentication_token: token) == User.find(params[:id]).directors.find_by(authentication_token: token)
    end
  end

end
