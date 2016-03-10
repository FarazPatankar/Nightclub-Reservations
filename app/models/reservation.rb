class Reservation < ActiveRecord::Base
	validates :name, :table_number, :number_of_people, :contact_number, :email, :date, :time, presence: true
end
