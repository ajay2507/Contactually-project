class ContactsController < BaseController
  
  # fetch all the contact initially
  def index
  	print "Inside controller"
   	@contacts = Contact.all
   	print @contacts
  end
  
  # Get all the contacts
  def get_contacts
    @contacts = Contact.all
    render json: @contacts
  end
  
  # create contacts from csv file
  def create
    puts "Inside create method"
    fileParams = params[:file]
    # decode the file
    decoded = Base64.decode64(CGI::unescape(fileParams))
    print decoded
    # parse the file using CSV
    rows = CSV.parse(decoded)
    puts rows
    # make headers seperated with _ lowercase(eg: first_name)
    headers = rows.shift.map { | header| header.gsub!(/( )/, '_').downcase! }
    headers[0] = headers[0].gsub!(/[^a-zA-Z_]/, "")[/first...../]
    puts headers
    contacts = rows.map { |row| Hash[headers.zip(row)] }
    # persist in contact table
    Contact.create(contacts);
   # redirect_to contacts_load_path
  end
  
  # Method to delete the contact based on the contact id
  def destroy
    puts "delete contact"
    contact = Contact.find(params[:id])
    contact.destroy
    render json: contact
  end
  
  # permit restricted parameter
  private
  def permit_params
    params.permit(:file)
  end
end
