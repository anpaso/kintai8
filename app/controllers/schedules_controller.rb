class SchedulesController < ApplicationController

  def index
  @a=current_user.as.all
  end

def new
  @a = A.new
  @a.d_id=params[:d_id]
end

  def create
    #binding.pry
    @a = current_user.as.new(schedule_params)
    if @a.save
      redirect_to  schedules_path, success: '登録が完了しました'
    else
       flash.now[:danger] = "登録に失敗しました"
      render :new
    end
  end

def edit
@a=current_user.as.find_by(d_id: params[:id])
#@a=current_user.as.find(params[:d_id])
end

def update
 @a=current_user.as.find_by(d_id: params[:id])
 #@a=current_user.as.find(params[:d_id])
 @a.update(schedule_params)
 redirect_to schedules_path
end

  private
   def schedule_params
     params.require(:a).permit(:d_id,:selection,:start_time,:end_time,:break,:description)
   end


end
