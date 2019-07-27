import React from 'react';
import './App.css';
import axios from 'axios';
const query = require('querystring');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
        name: "",
        surname: "",
        email: "",
        password: ""
      
    ,

      showLog: false,
      showReg: false,
      

    };


  }

  showLogin() {
    if (this.state.showLog === false) {
      this.setState({ showLog: true })
    }
    else {
      this.setState({ showLog: false });
    }
  }

  showRegister() {
    if (this.state.showReg === true) {
      this.setState({ showReg: false });

    }
    else {
      this.setState({ showReg: true });

    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let url = 'http://localhost:3001/';
    const data = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password
    }
    axios.post(url, query.stringify(data))
      .then(res => {
        this.setState({ output: res.data })
      })
  }













  render() {
    return (
      <form action="http://localhost:3001/" method="POST">
        <div id="App">

          <input type="button" value="Login" onClick={() => this.showLogin()} />

          <input type="button" className="btnSubmit" value="Registration" onClick={() => this.showRegister()} />


          <div className="text-center">
            <h1>Registration page</h1>
            <p>Please fill in this form to create an account</p>

          </div>

          {
            this.state.showLog ?
              <div className="float-right">
                <p>Email</p>
                <input type="text" name="email" placeholder=" Email" />
                <p>Password</p>

                <input type="text" name="password" placeholder=" Password" />
                <div className="form-group">
                  <input type="button" className="btnSubmit" value="Login" onClick={this.handleSubmit} />
                </div>

              </div>
              : null}
          {
            this.state.showReg ?
              <div>
                <p>Name</p>

                <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />

                <p>Surname</p>

                <input type="text" name="surname" placeholder=" Surname" onChange={this.handleChange} />

                <p>Email</p>

                <input type="text" name="email" placeholder=" Email" onChange={this.handleChange} />


                <p>Password</p>

                <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />


                <div className="form-group">



                  <input type="button" className="btnSubmit" value="Registration" onClick={this.handleSubmit} />
                </div>
              </div> : null
          }
        </div>

      </form>




    );
  }
}





export default App;
