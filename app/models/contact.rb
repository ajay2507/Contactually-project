class Contact < ActiveRecord::Base
	 validates_presence_of :first_name, :last_name, :phone_number, :email_address, :company_name
end
