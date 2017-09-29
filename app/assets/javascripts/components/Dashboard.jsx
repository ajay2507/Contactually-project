class Dashboard extends React.Component {

 constructor(props) {
        super(props);

        this.sort = this.sort.bind(this);
        this.filterByCom = this.filterByCom.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { reset : false }
    }

    // Invoked before the component renders
    componentWillMount() {
        this.state = { contacts: this.props.contact };
    }

    sort(key) {
        const contacts = this.state.contacts;
        const sortedContacts = this.state.contacts.sort((contactA, contactB) => {
            return contactA[key] >= contactB[key] ? 1 : -1;
        });
        this.setState({ contacts: sortedContacts, reset: true })
    }

    filterByCom() {
        const filteredContacts = this.state.contacts.filter(contact => {
            return contact.email_address.endsWith('.com');
        })
        console.log(filteredContacts);
        this.setState({ contacts: filteredContacts, reset: true })
    }

    reset() {

    }

    render(){
    	return(
            
             <div>
             	<Header />
             	<div className="container">
             	 <div className="row">
             	 <div>
             	 	<button className="btn btn-primary" onClick={() => this.sort('email_address')} >Sort by Email Address</button>
             	 	<button className="btn btn-primary" onClick={() => this.filterByCom()} >Filter by .com</button>
             	 	{this.state.reset && <button className="btn btn-primary" onClick={() => this.filterByCom()} >Show All</button>}
             	 </div>
             	<Contacts contacts={this.state.contacts} />
             </div>
             </div>
             </div>


    		)
    }
}