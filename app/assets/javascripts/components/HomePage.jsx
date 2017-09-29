class HomePage extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		fileURL:'',
  		fileUpload:''
  	}
    // binding the current object
  	this.changeFile = this.changeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  	
  }
  
  // fires when file gets uploaded
  changeFile(e){
  	  let reader = new FileReader();
  	  let file = e.currentTarget.files[0];
  	  let that = this;
  	  reader.onloadend = function() {
        that.setState({ fileURL: reader.result, fileUpload: file });
      }
      if(file){
         reader.readAsDataURL(file);
      }
     
  }

  createContacts(formData){
     
      $.ajax({ url: '/contacts/create', 
        type: 'POST', 
        data: formData, 
        success: (response) => { 
          console.log('it worked!', response); 
        } });

  }
  
  resetForm(){
      this.setState({
         fileURL:'',
         fileUpload:''
      })
  }

  handleSubmit(e){
  	
      if(this.state.fileURL != ''){
      let formData = {"file":this.state.fileURL};
      this.createContacts(formData);
     }else{
        alert("Please upload the file");
    }}

  render() {
    return (
    	 <div>
          <h2>Upload the file</h2>
          <form onSubmit={this.handleSubmit}>

            <input type="file" onChange={this.changeFile} />

            <button className="btn btn-success">Upload</button>
          </form>

          <a className="btn btn-success" href="/contacts/load">View Contacts</a>
        </div>
        );
  }
}