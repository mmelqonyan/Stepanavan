import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  async componentDidMount() {
    window.addEventListener('load', this.get.bind(this))
  }
load (){
  window.location.reload()
}
  async get(e) {
    e.preventDefault();
    var url = 'http://localhost:3001';
    await axios.get(url)
      .then((ggg) => {
        this.setState({
          data: ggg.data.title,
        })
      })
  };


  render() {
    return (

      <div id="App">

        <form action="http://localhost:3001/" method="POST">

          <input type="text" name="title" />
          <input type="submit" value="submit"  />
        </form>
        <p>{this.state.data}</p>

      </div>

    );
  }
}
export default App; 
