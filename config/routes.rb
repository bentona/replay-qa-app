ReplayQaApp::Application.routes.draw do

  get "welcome/index"
  root "welcome#index"

  resources :users

  get "sign_up" => "users#new"
  get "sign_in" => "session#new"
  post "session/create"
end
