class ContactsController < BaseController
  
  # fetch all the contact initially
  def index
  	print "Inside controller"
   	@contacts = Contact.all
   	print @contacts
  end
  
  def get_contacts
    @contacts = Contact.all
    render component: 'Contacts', props: { contact: @contacts }
  end

  def create
    puts "Inside create method"
    fileParams = params[:file]
    # decode the file
    decoded = Base64.decode64(CGI::unescape(fileParams))
    # parse the file using CSV
    rows = CSV.parse(decoded)
    print rows
    # make headers seperated with _ lowercase(eg: first_name)
    headers = rows.shift.map { | header| header.gsub!(/( )/, '_').downcase! }
    headers[0] = headers[0].gsub!(/[^a-zA-Z_]/, "")[/first...../]
    puts headers
    contacts = rows.map { |row| Hash[headers.zip(row)] }
    # persist in contact table
    Contact.create(contacts);
    redirect_to contacts_path
  end

  def destroy
  end

  private
  def permit_params
    params.permit(:file)
  end
end
