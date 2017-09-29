class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileURL: '',
            fileUpload: ''
        }
        // binding the current object
        this.changeFile = this.changeFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // fires when file gets uploaded
    changeFile(e) {
        let reader = new FileReader();
        let file = e.currentTarget.files[0];
        let that = this;
        reader.onloadend = function() {
            that.setState({ fileURL: reader.result, fileUpload: file });
        }
        if (file) {
            reader.readAsDataURL(file);
        }

    }

    createContacts(formData) {

        $.ajax({
            url: '/contacts/create',
            type: 'POST',
            data: formData,
            success: (response) => {
                console.log('it worked!', response);
            }
        });

    }

    resetForm() {
        this.setState({
            fileURL: '',
            fileUpload: ''
        })
    }

    handleSubmit(e) {

        if (this.state.fileURL != '') {
            let formData = { "file": this.state.fileURL };
            this.createContacts(formData);
        } else {
            alert("Please upload the file");
        }
        e.preventDefault();
    }


  render() {
    return (
    	 <div className="home-wrapper">
          <h2 className="text-center">Want to build strong relationship?</h2>
          <h2 className="text-center">try <span>Contactually</span></h2>
          <form onSubmit={this.handleSubmit}>
            <div className="file-upload">
            <input type="file" onChange={this.changeFile} />
            </div>
            <button className="btn btn-success margin-top">Upload</button>
             <a className="margin-top margin-left btn btn-success" href="/contacts/load">View Contacts</a>
          </form>

         
        </div>
        );
  }
}