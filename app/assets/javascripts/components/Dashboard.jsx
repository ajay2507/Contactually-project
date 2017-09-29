class Dashboard extends React.Component {

 constructor(props) {
        super(props);
        
        this.sort = this.sort.bind(this);
        this.filterByCom = this.filterByCom.bind(this);
        this.state = { reset : false , contacts: this.props.contact, homeFlag: this.props.homeFlag };
        this.deleteContact = this.deleteContact.bind(this);
        this.backFunc = this.backFunc.bind(this);
    }

    componentWillMount() {
    	$.ajax({
            url: '/contacts/load',
            type: 'GET',
            dataType: "json",
            success: (response) => {
               // const filterContacts = this.state.contacts.filter(contact => contact.id != response.id);
                this.setState({ contacts: response });
            },
            error: () => {
                console.log("Error in getting contacts");
            }
        });
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
        const contacts = this.state.contacts.filter(contact => {
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

    backFunc(){
    	window.location.reload();
    }


    render(){
    	
    	return(
             
             <div className="dashboard">
             	<Header />
             	<div className="container">
             	 <div className="row">
             	 <div>
             	    <button className="btn btn-primary margin-bottom" onClick={this.backFunc} >Back</button>
             	    <div className="btn-class">
             	 	<button className="btn btn-primary margin-bottom" onClick={() => this.sort('email_address')} >Sort by Email Address</button>
             	 	<button className="btn btn-primary margin-left margin-bottom" onClick={this.filterByCom} >Filter by .com</button></div>
             	 	
             	 </div>
             	{this.state.contacts != undefined && <Contacts deleteContact={this.deleteContact} contacts={this.state.contacts} />}
             </div>
             </div>
             </div>


    		)
    }
}