import React from 'react';

import './App.css';


    class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {namevalue: '', surnamevalue: '', phonevalue: ''};

    this.nameChange = this.nameChange.bind(this);
    this.surnameChange = this.surnameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.ccc = this.ccc.bind(this);
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
  
   ccc(){
let text= this.state.namevalue + " " + this.state.surnamevalue + " " + this.state.phonevalue 
this.setState({final:text})
}
     
   
  render() {
    return (
      
      <div>
          <input type="text" value={this.state.namevalue} onChange={this.nameChange} />
         
          <input type="text" value={this.state.surnamevalue} onChange={this.surnameChange} />
       
          <input type="text" value={this.state.phonevalue} onChange={this.phoneChange} />
       
         <button onClick={this.ccc}>Submit</button>
         <p>{this.state.final}</p>
       
  </div>     
      
    )
   }
}

export default App; 






