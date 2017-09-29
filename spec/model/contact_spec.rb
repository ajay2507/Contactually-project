require 'rails_helper'


describe Contact, :type => :model do
  

  it "valid user" do
    create_contact = Contact.create(first_name: "Ajay", last_name: "Kumar", email_address: "aprathap@uncc.edu", 
      phone_number: "704-906-4562", company_name: "Contactually")
    expect(create_contact.first_name).to eq("Ajay")
    expect(create_contact.last_name).to eq("Kumar")
    expect(create_contact.email_address).to eq("aprathap@uncc.edu")
    expect(create_contact.phone_number).to eq("704-906-4562")
    expect(create_contact.company_name).to eq("Contactually")
  end

  it "contact is invalid without first name" do
    create_contact = Contact.create(email_address: "aprathap@uncc.edu", 
      phone_number: "704-906-4562", company_name: "Contactually")
    expect(create_contact).not_to be_valid
  end 

  it "contact is invalid without last name" do
    create_contact = Contact.create(email_address: "aprathap@uncc.edu", 
      phone_number: "704-906-4562", company_name: "Contactually")
    expect(create_contact).not_to be_valid
  end 

  it "contact is invalid without email address" do
    create_contact = Contact.create(first_name: "Ajay", last_name: "Kumar",
      phone_number: "704-906-4562", company_name: "Contactually")
    expect(create_contact).not_to be_valid
  end 

  it "contact is invalid without phone number" do
    create_contact = Contact.create(first_name: "Ajay", last_name: "Kumar", email_address: "aprathap@uncc.edu", 
      company_name: "Contactually")
    expect(create_contact).not_to be_valid
  end 

  it "contact is invalid without company name" do
    create_contact = Contact.create(first_name: "Ajay", last_name: "Kumar", 
      email_address: "aprathap@uncc.edu", phone_number: "704-906-4562")
    expect(create_contact).not_to be_valid
  end 



end