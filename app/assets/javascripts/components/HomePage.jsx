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
      $.ajax({
      url: '/api/posts',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(post) {
          resetForm();
      }
    })
  }
  
  resetForm(){
      this.setState({
         fileURL:'',
         fileUpload:''
      })
  }

  handleSubmit(e){
  	 console.log("submit the form");
      if(){
      var formData = new FormData();
      formData.append("file", this.state.fileURL);
      createContacts(formData);
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