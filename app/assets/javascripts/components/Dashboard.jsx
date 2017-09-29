class Dashboard extends React.Component {

  constructor(props) {
        super(props);
    }
    
    // Invoked before the component renders
    componentWillMount() {
        this.state = { contacts: this.props.contact };
    }
    
    sortByEmail(){

    }

    filterContacts(){

    }

    
    render(){
    	return(
            
             <div>
             	<Header />
             	<div className="container">
             	 <div className="row">
             	 <div>
             	 	<button className="btn btn-primary" onClick={this.sortByEmail} >Sort by Email Address</button>
             	 	<button className="btn btn-primary" onClick={this.filterContacts} >Filter by .com</button>
             	 </div>
             	<Contacts contacts={this.state.contacts} />
             </div></div></div>


    		)
    }
}