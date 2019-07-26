import React from 'react';

import './App.css';


//class App extends React.Component {

  
         
//         state = {
//                name:"",
//                surname:"",
//              email:"",      
//              password:"" ,
//              isToggleOn: true     
//        };

//       //  this.email = this.email.bind(this);
//       //  this.password = this.password.bind(this);
//       //  this.handleClick = this.handleClick.bind(this);

    



//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }
  


//   render() {
//     return (
//       <form method="POST">
//         <div id="App">


//           <div class="text-center">
//             <h1>Registration page</h1>
//             <p>Please fill in this form to create an account</p>

//           </div>

//           <div class="float-right" hidden >
//             <p>Email</p>
//             <input type="text" name="email" placeholder="Email" id="email" />
//             <p>Password</p>

//             <input type="text" name="Password" placeholder="Password" id="password" />

//           </div>

//           <div class="form-group">
//             <input type="button" class="btnSubmit" value="Sign in" onClick={this.handleClick} />
//           </div>

//           <p>Name</p>

//           <input type="text" name="name" placeholder="Name" />

//           <p>Surname</p>

//           <input type="text" name="surname" placeholder="Surname" />

//           <p>Email</p>

//           <input type="text" name="surname" placeholder="Email" id="email" />


//           <p>Password</p>

//           <input type="text" name="password" placeholder=" " Password id="password" />
//           <div class="form-group">
//             <input type="submit" class="btnSubmit" value="Registration"  />
//           </div>

//         </div>

//       </form>




//     );
//   }
// }

// /*
 
  
  
//   let inputpassword = document.getElementById('password').value;
//   if((inputemail=== this.state.email) &&  (inputpassword=== this.state.password)){
//     console.log("welcome our service")
//   }
//   else{
//     console.log("Error")

//   }
// } 

//  registr =()=> {
//   let inputemail = document.getElementById('email').value;
  
  
  
//   if((inputemail=== this.state.email)){
//     console.log("aydpisi email arden ka");
//   }
  

// } 
// */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
    <div>
      <div>{this.state.isToggleOn ? 
        <div class="float-right" hidden >
                    <p>Email</p>
                   <input type="text" name="email" placeholder="Email" id="email" />
                   <p>Password</p>
        
                    <input type="text" name="Password" placeholder="Password" id="password" />
        
                  </div> : 
                
                <div class="float-right" show >
                <p>Email</p>
               <input type="text" name="email" placeholder="Email" id="email" />
               <p>Password</p>
    
                <input type="text" name="Password" placeholder="Password" id="password" />
    
              </div> } </div>
      <input onClick={this.handleClick} value="Barev"/>
        
      </div>
      
    );
  }
}

export default App;
