class ContactsController < BaseController
  
  # fetch all the contact initially
  def index
  	print "Inside controller"
   	@contacts = Contact.all
   	print @contacts
  end
  
  def create
    puts "Inside create method"
    fileParams = params[:file]
    decoded = Base64.decode64(fileParams)
    puts "****************"
    puts decoded
    puts "file***"
    rows = CSV.parse(fileParams, { :col_sep => "\t" })
    puts rows
    headers = rows.shift.map { | header| header.gsub!(/( )/, '_').downcase! }
    contacts = rows.map { |row| Hash[headers.zip(row)] }
    puts "contacts"
    puts contacts
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
