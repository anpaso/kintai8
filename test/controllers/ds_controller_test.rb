require 'test_helper'

class DsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get ds_new_url
    assert_response :success
  end

end
