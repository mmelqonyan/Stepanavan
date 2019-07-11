//import React from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';



class App extends React.Component {
   state = {
      color: 'green',
    }
 interval = setInterval(() => {
    let newColor = this.state.color == 'green' ? 'yellow' : 'green';
    this.setState({ color: newColor })
  }, 2000);
  stopTimeout() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div style={{ background: this.state.color }} className="div">
          <div className="div1" >
            Hello
          </div>
        </div>
        <div className="input">
        <input type="button" value="Stop" onClick={() => this.stopTimeout()} className="button" />
        </div>
      </div>
    );
  }
}

export default App;