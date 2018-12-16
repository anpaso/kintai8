require 'test_helper'

class BsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get bs_new_url
    assert_response :success
  end

end
