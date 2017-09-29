/* Contacts component to show in table */
class Contacts extends React.Component {

  constructor(props) {
        super(props);
         this.state = { contacts: this.props.contacts };
    }

  componentWillMount() {
     this.state = { contacts: this.props.contacts };
  }
    
  
  render() {

  	const contactList = this.props.contacts
   const deleteContact = this.props.deleteContact

    return (
    	<div>
        <table className='table-responsive table table-striped'>
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
              <td><button className="btn btn-danger"  onClick={(event) => {
                event.preventDefault();
                deleteContact(contact);
              }}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>);
  }
}