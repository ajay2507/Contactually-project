class CreateContacts < ActiveRecord::Migration
  def up
    create_table :contacts do |t|
    	t.string :first_name
    	t.string :last_name
    	t.string :email_address
    	t.string :phone_number
    	t.string :company_name
        t.timestamps null: false
    end
  end

  def down
  	drop_table :contacts
  end
end
