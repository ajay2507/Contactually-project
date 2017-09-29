class Dashboard extends React.Component {

 constructor(props) {
        super(props);
        
        this.sort = this.sort.bind(this);
        this.filterByCom = this.filterByCom.bind(this);
        this.state = { reset : false , contacts: this.props.contact };
        this.deleteContact = this.deleteContact.bind(this);
    }

    // Generic sort method, can be sorted based on any keys like(name, email,phone)
    sort(key) {

        const sortedContacts = this.state.contacts.sort((contactA, contactB) => {
            return contactA[key] >= contactB[key] ? 1 : -1;
        });
        this.setState({ contacts: sortedContacts, reset: true })
    }
    
    // Filter the email address field by .com 
    filterByCom(e) {
    	const contactList = this.state.contacts;
        const contacts = this.props.contact.filter(contact => {
            return contact.email_address.endsWith('.com');
        })
        //console.log(filteredContacts);
        this.setState({ contacts, reset: true });
        //e.preventDefault();
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


    render(){
    	
    	return(
             
             <div>
             	<Header />
             	<div className="container">
             	 <div className="row">
             	 <div>
             	    <a className="btn btn-primary" href='/' >Back</a>
             	 	<button className="btn btn-primary" onClick={() => this.sort('email_address')} >Sort by Email Address</button>
             	 	<button className="btn btn-primary" onClick={this.filterByCom} >Filter by .com</button>
             	 	
             	 </div>
             	<Contacts deleteContact={this.deleteContact} contacts={this.state.contacts} />
             </div>
             </div>
             </div>


    		)
    }
}