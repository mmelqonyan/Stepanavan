import React from 'react';

import './App.css';


class App extends React.Component {
  
  constructor(props){
        super(props);
       this.state = {
         name:"",
         surname:"",
          email:"",
       
          password:"",
          showLog:false,
          showReg:false,
          vxod:false,
          registr:false,

        
      };
      

   }

   showLogin(){
     if(this.state.showLog === false){
       this.setState({showLog: true})
     }
     else{
      this.setState({showLog: false});
     }
   }

   showRegister() {
    if(this.state.showReg === true){
      this.setState({showReg: false});
 
    }
    else{
      this.setState({showReg: true});
 
    }
  }


vxod=()=> {  
   let inputemail = document.getElementById('email').value;
  
  
   let inputpassword = document.getElementById('password').value;
   if((inputemail=== this.state.email) &&  (inputpassword=== this.state.password)){
     alert("velcome our servise")
   }
   else{
     alert("please, try again")

   }
 } 

  registr =()=> {
   let inputemail = document.getElementById('email').value;
  
  
  
   if((inputemail=== this.state.email)){
     alert("aydpisi email arden ka");
   }
  

 } 

 




  render() {
    return (
      <form   action="http://localhost:3001/"  method="POST">
      <div   id = "App">

      <input type="button" value="Login" onClick={()=>this.showLogin()}/>

<input type="button" class="btnSubmit"value = "Registration" onClick={()=>this.showRegister()}/>
      
  
  <div class="text-center">
    <h1>Registration page</h1>
    <p>Please fill in this form to create an account</p>
    
  </div>
  
  
        
      
      
  
         
      {
        this.state.showLog?
        <div class="float-right">
     <p>Email</p>
        <input  type="text" name="email "   placeholder=" Email"  id = "email" />
      <p>Password</p>
    
        <input type="text" name="Password " placeholder=" Password" id = "password" />
        <div class="form-group">
                            <input type="button" class="btnSubmit" value="Login" onClick={()=>this.vxod()}/>  
                        </div>
                       
       
        
        
        </div>
        :null}
        
          
          

         
       
    
{
this.state.showReg? 
<div>      
 <p>Name</p>

<input type="text" name= "name"  placeholder="Name" />

<p>Surname</p>

<input type="text" name="surname "  placeholder=" Surname" />

<p>Email</p>

<input type="text" name="surname "  placeholder=" Email" id = "email" />


<p>Password</p>

<input type="text" name="password "  placeholder= "Password"id = "password"   />


<div class="form-group">

 

 <input type="button" class="btnSubmit"value = "Registration" onClick={()=>this.registr()}/>
  </div>
 </div>:null
}
</div>

        </form>

       

    
    );
  }
}


  


export default App ;
