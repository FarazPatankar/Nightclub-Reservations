class ReservationMailer < ApplicationMailer
	default from: "hi@hi.com"
	def reservation_email(reservation)
		@reservation = reservation
		mail(to: , subject: "New Reservation")
	end
end
