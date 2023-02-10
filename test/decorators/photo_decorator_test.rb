# frozen_string_literal: true

require 'test_helper'

class PhotoDecoratorTest < ActiveSupport::TestCase
  def setup
    @photo = Photo.new.extend PhotoDecorator
  end

  # test "the truth" do
  #   assert true
  # end
end
