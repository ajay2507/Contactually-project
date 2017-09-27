class ContactsController < ApplicationController
  
  # fetch all the contact initially
  def index
  	print "INside controller"
   	@contacts = Contact.all
   	print @contacts
  end
  
  def create

  end

  def delete
  end

  private
  def permit_params
    params.permit(:file)
  end
end
