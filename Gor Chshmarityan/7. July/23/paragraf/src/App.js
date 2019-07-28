import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  
    state = {
      data: ''
    };
  
 componentDidMount() {
    window.addEventListener('load', this.get.bind(this))
  }
load (){
  window.location.reload()
}
handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      data: this.state.title
    };

    axios.post(`http://localhost:3001`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  get() {
    var url = 'http://localhost:3001';
    axios.get(url)
      .then((ggg) => {
        this.setState({
          data: ggg.data.title,
        })
      })
  };


  render() {
    return (

      <div id="App">

        
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      
        <p>{this.state.data}</p>

      </div>

    );
  }
}
export default App; 
