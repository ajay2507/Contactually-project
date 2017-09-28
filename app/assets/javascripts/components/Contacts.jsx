class Contacts extends React.Component {
  render() {

  	let contactList = this.props.contact
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
              <td></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>);
  }
}