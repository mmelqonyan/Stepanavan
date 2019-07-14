import React from 'react';
import './App.css';

class App extends React.Component {
   state = {
       name: '',
       surname: '',
       othername: '',
   }
   onChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
   }
   handleShow = () => {
       let paragraf = document.getElementById('p');
       const { name, surname, othername } = this.state;
       paragraf.innerHTML = `${name} ${surname} ${othername}`;
       this.setState({
           name : '', surname : '', othername : ''
       })
   }
   render() {
       const { name, surname, othername } = this.state;
        return (
           <div>
               <input type="text" name="name" value={name} onChange={this.onChange} />
               <input type="text" name="surname" value={surname} onChange={this.onChange} />
               <input type="text" name="othername" value={othername} onChange={this.onChange} />
               <button onClick={this.handleShow}>Show</button>
               <p id="p"></p>
           </div>
       )
   }
}
export default App;
