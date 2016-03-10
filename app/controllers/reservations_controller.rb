class ReservationsController < ApplicationController
	def index
		@reservation = Reservation.new
	end

	def create
		@reservation = Reservation.new(reservation_params)

		if @reservation.save
			redirect_to reserve_path
		end
	end

	private
	def reservation_params
		params.require(:reservation).permit(:name, :table_number, :number_of_people, :contact_number, :email, :date, :time, :comments)
	end
end
