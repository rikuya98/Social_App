# frozen_string_literal: true

require 'test_helper'

class User　DecoratorTest < ActiveSupport::TestCase
  def setup
    @user　 = User　.new.extend User　Decorator
  end

  # test "the truth" do
  #   assert true
  # end
end
