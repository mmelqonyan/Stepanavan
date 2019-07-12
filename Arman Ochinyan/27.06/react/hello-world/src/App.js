//Please run a 'npm start' and 'node server' in terminal, so the program will work correctly

import React from 'react';

import customData from './js.json';
import './App.css';
import Great from './great';

class HelloMessage extends React.Component {
  

  render() {
    return (
        <form  action="http://localhost:3001/" method="POST">
            <label>
                Send Json file data to the database : 
                <input type="hidden" value={JSON.stringify(customData) } name="email" />
            </label>
           
            <input type="submit" value="Submit" />
            
        </form>
    );
  }
}


class SimpleForm extends React.Component {
  state = {
    firstName: "",
    frError : "",
  };

  onFirstNameChange = event => {
    this.setState({
      firstName: event.target.value,
    });
   }
   validateName = (name) => {
    const regex = /[A-Za-z]{3,}/;
    return !regex.test(name) ? "error pleace enter correct name" : "";
   }
   onFrblur = () => {
    const { firstName } = this.state;
    const frError = this.validateName(firstName);
    return this.setState({ frError });
   }

  render() {
    const {firstName, frError} = this.state;
    return (
      <div
        style={{
          margin: 50,
          padding: 10,
          width: 300,
          border: "1px solid black",
          backgroundColor: "black",
          color: "white",
       
        }}
      >
        <input style={{backgroundColor: '#EFEFFF', marginLeft: 10}} type="text" name="firstName" onChange={this.onFirstNameChange} onBlur={this.onFrblur} />
       {frError && <div  style={{color: 'red', margin: 5}}>{frError} </div>}
        <Great a={firstName} b={firstName.length} />
      </div>
    );
  }
}



export default SimpleForm;
