Rails.application.routes.draw do

  mount EmberCLI::Engine => "ember-tests" if Rails.env.development?


  devise_for :users, controllers: {
    sessions: 'sessions',
    registrations: 'users',
    confirmations: 'confirmations',
    passwords: 'passwords'
  }

  resources :users do
    get :show_student, :on => :collection
    post :process_payment, :on => :collection
    post :cancel_subscription, :on => :collection
    post :proration_price, :on => :collection
    post :stripe_hook, :on => :collection
  end

  resources :feedbacks
  resources :semesters
  resources :courses
  resources :weights
  resources :grades
  resources :group_memberships do
    post :remove, :on => :collection
  end

  resources :groups do
    post :join, :on => :collection
  end

  mount_ember_app :frontend, to: "/", controller: "ember", action: "index"

  # root 'application#index'
  # get '/*path' => 'application#index'

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
