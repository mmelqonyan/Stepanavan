import React from 'react';
import axios from 'axios';
import './App.css';
const query = require('querystring');

class App extends React.Component {
  state = {
    name: '',
    output: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    let url = 'http://localhost:3001/';
    const data = {
      title: this.state.name
    }
    axios.post(url, query.stringify(data))
      .then(res => {
        this.setState({ output: res.data })
      })
  }

  render() {
    return (
      <div id="App">
        <input type="text" name="title" onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>Add</button>
        <br />
        {this.state.output}
      </div>
    );
  }
}
export default App; 
