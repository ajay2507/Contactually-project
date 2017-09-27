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
end
