class ApplicationController < ActionController::Base
before_action :configure_permitted_parameters, if: :devise_controller?

def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:account_name])
end

def current_user
    ActiveDecorator::Decorator.instance.decorate(super) if super.present?
    super
end

end