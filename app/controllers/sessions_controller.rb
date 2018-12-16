class SessionsController < ApplicationController
require "pry"
  def new
    end
    def create

      user = User.find_by(email: session_params[:email])
      if user && user.authenticate(session_params[:password])
        log_in user
        redirect_to dakokus_index_path, success: 'ログインに成功しました'
        current_user
        #binding.pry
      else
        flash.now[:danger] = 'ログインに失敗しました'
        render :new
      end
    end

    def destroy
      log_out
      redirect_to root_url, info: 'ログアウトしました'
    end

    def log_out
        #binding.pry
      session.delete(:user_id)
      @current_user = nil
    end

    private
    def log_in(user)
      session[:user_id] = user.id
    end

    private
    def session_params
      params.require(:session).permit(:email,:password)
    end

end
