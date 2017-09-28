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
  	 console.log("file uploaded");
  	 console.log(e);
      let filePath = $('input[type=file]').val();
  	  let reader = new FileReader();
  	  let file = e.currentTarget.files[0];
  	  let that = this;
  	  reader.onloadend = function() {
        that.setState({ fileURL: reader.result, fileUpload: filePath });
      }
      if(file){
         reader.readAsDataURL(file);
      }
     
  }

  createContacts(formData){
      console.log(formData);
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
  	 console.log("submit the form");
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

            <button>Upload</button>
          </form>
        </div>
        );
  }
}