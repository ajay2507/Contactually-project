require 'rails_helper'

describe ContactsController do
describe 'GET #index' do
    context 'contacts index page' do

      before :each do
        get :index
      end

      it 'assigns all contacts to @contacts' do
        expect(assigns(:contacts)).to eq(Contact.all)
      end

      it 'renders the correct page' do
        expect(response).to render_template :index
      end
    end
  end

  describe 'delete a contact' do
    it 'deletes a contact' do
      new_contact = {first_name: "Ajaykumar", last_name: "kumar", email_address: "aprathap@uncc.edu", phone_number: "704-906-7894", company_name: "Contactually"}
      Contact.create(new_contact)
      expect{ delete :destroy, id: Contact.last}.to change(Contact, :count).by(-1)
    end
  end
end