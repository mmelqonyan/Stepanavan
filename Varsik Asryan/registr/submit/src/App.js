import React from 'react';

import './App.css';


class App extends React.Component {
  
  constructor(props){
        super(props);
       this.state = {
         name:"",
         surname:"",
          email:"",
       
          password:""
        
      };
      this.vxod = this.vxod.bind(this);
       this.registr = this.registr.bind(this);
      

   }


  render() {
    return (
      <form   action="http://localhost:3001/"  method="POST">
      <div   id = "App">
   
  
  <div class="text-center">
    <h1>Registration page</h1>
    <p>Please fill in this form to create an account</p>
    
  </div>
  
  
        
      
      
  
         
      
        <div class="float-right">
     <p>Email</p>
        <input  type="text" name="email "   placeholder=" Email"  id = "email" />
      <p>Password</p>
    
        <input type="text" name="Password " placeholder=" Password" id = "password" />
        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Sign in" OnClock />
                        </div>
                       
       
        
        
        </div>
        
          
          

         
       
    

         
          <p>Name</p>

<input type="text" name="name "  placeholder=" Name" />

<p>Surname</p>

<input type="text" name="surname "  placeholder=" Surname" />

<p>Email</p>

<input type="text" name="surname "  placeholder=" Email" id = "email" />


<p>Password</p>

<input type="text" name="password "  placeholder=" "Password id = "password"   />
<div class="form-group">
                            <input type="submit" class="btnSubmit" value="Registration" />
                        </div>



      
</div>

        </form>

       

    
    );
  }
}


 vxod=()=> {  
  let inputemail = document.getElementById('email').value;
  
  
  let inputpassword = document.getElementById('password').value;
  if((inputemail=== this.state.email) &&  (inputpassword=== this.state.password)){
    console.log("welcome our service")
  }
  else{
    console.log("Error")

  }
} 

 registr =()=> {
  let inputemail = document.getElementById('email').value;
  
  
  
  if((inputemail=== this.state.email)){
    console.log("aydpisi email arden ka");
  }
  

} 


export default App ;
