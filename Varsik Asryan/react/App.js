import React from 'react';
import './App.css';







    class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {namevalue: '', surnamevalue: '', phonevalue: ''};

    this.nameChange = this.nameChange.bind(this);
    this.surnameChange = this.surnameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(event) {
    this.setState({namevalue: event.target.value});
  }

  surnameChange(event) {
    this.setState({surnamevalue: event.target.value});
  }

  phoneChange(event) {
    this.setState({phonevalue: event.target.value});
  }
  handleSubmit(event) {
    
    event.preventDefault();
  }
   
     
   
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.namevalue} onChange={this.nameChange} />
          Surname
          <input type="text" value={this.state.surnamevalue} onChange={this.surnameChange} />
          Phone
          <input type="text" value={this.state.phonevalue} onChange={this.phoneChange} />
        </label>
        <input type="submit"/>
        <p>{this.state.namevalue + " " + this.state.surnamevalue + " " + this.state.phonevalue }</p>
       </form>
       
      
    )
   }
}

export default App; 


