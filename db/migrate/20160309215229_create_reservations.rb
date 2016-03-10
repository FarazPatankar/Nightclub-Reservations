class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :name
      t.integer :table_number
      t.integer :number_of_people
      t.string :contact_number
      t.string :email
      t.date :date
      t.time :time
      t.text :comments

      t.timestamps null: false
    end
  end
end
