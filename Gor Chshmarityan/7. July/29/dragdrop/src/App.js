import React, { Component, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';
import axios from 'axios';
var ee = require('event-emitter');
var emitter = ee();
const query = require('query-string')
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>)
  }
}
class LoginPage extends Component {
  state = {
    login: '',
    pass: '',
    showLog: false,
    showReg: false,
    status: false
  }
  handleLogin = event => {
    this.setState({
      login: event.target.value

    });
  }
  handlePass = event => {
    this.setState({

      pass: event.target.value
    });
  }
  register = event => {
    event.preventDefault();
    const user = {
      login: this.state.login,
      pass: this.state.pass
    };
    const url = 'http://localhost:3001/register'
    axios.post(url, query.stringify(user))
      .then(res => {
        alert(res.data);
        window.location.reload();
      })
  }
  login = event => {
    event.preventDefault();
    const user = {
      login: this.state.login,
      pass: this.state.pass
    };
    const url = 'http://localhost:3001/login'
    axios.post(url, query.stringify(user))
      .then(res => {
        if (res.data === 'ok') {
          this.setState({
            status: true
          })
        }
        else{
          alert("Your login or password is wrong!")
        }
      })
  }
  showLogin() {
    if (this.state.showLog === false) {
      this.setState({
        showLog: true,
        showReg: false
      })
    }
    else {
      this.setState({ showLog: false });
    }
  }
  showRegister() {
    if (this.state.showReg === false) {
      this.setState({
        showReg: true,
        showLog: false
      });

    }
    else {
      this.setState({ showReg: true });
    }
  }
  render() {
    return (
      <div>
        {!this.state.status ? <div>
          <input type="button" value="Login" onClick={() => this.showLogin()} />
          <input type="button" className="btnSubmit" value="Registration" onClick={() => this.showRegister()} />
          <form onSubmit={this.handleSubmit}>
          </form>
          {
            this.state.showLog ?
              <div className="float-right">
                <p>Login</p>
                <input type="text" name="login" placeholder="Login" onChange={this.handleLogin} />
                <p>Password</p>
                <input type="text" name="pass" placeholder="Password" onChange={this.handlePass} />
                <div className="form-group">
                  <input type="button" value="Login" onClick={this.login} />
                </div>
              </div>
              : null}
          {
            this.state.showReg ?
              <div>
                <p>Login</p>
                <input type="text" name="login" onChange={this.handleLogin} />
                <p>Password</p>
                <input type="text" name="pass" onChange={this.handlePass} />
                <br />
                <input type="button" value="Register" onClick={this.register} />
              </div>
              : null
          }
        </div> : <div><Dropzone /><Cards /></div>}
      </div>
    )
  }
}
class Cards extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }
  initCards(item) {
    this.state.cards.push(<Card key={item + Math.random()} images={item.images} type={item.name} price={item.price} />);
    return this.state.cards;
  }
  render() {
    emitter.once("fileDroped", (item) => {
      this.initCards(item)
      this.forceUpdate()
    })
    return (
      <div className="list">
        {this.state.cards}
      </div>)
  }
}
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img
            src={this.props.images}
            alt={this.props.type} />
        </div>
        <h3>{this.props.type}</h3>
        <p>{this.props.price}</p>
      </div>
    )
  }
}
function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()
    reader.onload = () => {
      let json;
      try {
        json = JSON.parse(reader.result)
      } catch (err) {
        alert("Please upload correct json file")
      }
      for (let item in json) {
        if (!(json[item].hasOwnProperty("name") || json[item].hasOwnProperty("images") || json[item].hasOwnProperty("price"))) {
          alert("Json struture should be like { key : {name, price, images} } etc")
          return
        }
        emitter.emit('fileDroped', json[item]);
      }
    }
    acceptedFiles.forEach(file => reader.readAsBinaryString(file))
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ["application/json"] })
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="drag">Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}
export default App;