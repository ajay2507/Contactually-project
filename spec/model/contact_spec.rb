require 'rails_helper'


describe Contact, :type => :model do
  

  it "valid user" do
    create_contact = Contact.create(first_name: "Ajay", last_name: "Kumar", email_address: "aprathap@uncc.edu", 
      phone_number: "704-906-4562", company_name: "Contactually")

    expect(create_contact.first_name).to eq("Ajay")
    expect(create_contact.last_name).to eq("kumar")
    expect(create_contact.email_address).to eq("aprathap@uncc.edu")
    expect(create_contact.phone_number).to eq("704-906-4562")
    expect(create_contact.company_name).to eq("Contactually")
  end

end