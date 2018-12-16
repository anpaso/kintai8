require 'test_helper'

class DakokusControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dakokus_index_url
    assert_response :success
  end

end
