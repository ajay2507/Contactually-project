class Contacts extends React.Component {

  constructor(props) {
        super(props);
    }
    
    // Invoked before the component renders
    componentWillMount() {
        this.state = { contacts: this.props.contacts };
    }

    // Method to delete the contacts
    deleteContact(contact) {
        console.log(contact);
        $.ajax({
            url: '/contacts/' + contact.id,
            type: 'DELETE',
            dataType: "json",
            success: (response) => {
                const filterContacts = this.state.contacts.filter(contact => contact.id != response.id);
                this.setState({ contacts: filterContacts });
            },
            error: () => {
                console.log("Error in deleting contacts");
            }
        });


    }

  render() {

  	let contactList = this.state.contacts
    return (
    	<div>
        <table className='table table-striped'>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th></th>
            </tr>
            {contactList.map((contact, index) => (
            <tr key={index}>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email_address}</td>
              <td>{contact.phone_number}</td>
              <td>{contact.company_name}</td>
              <td><button className="btn btn-danger" onClick={this.deleteContact.bind(this,contact)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>);
  }
}