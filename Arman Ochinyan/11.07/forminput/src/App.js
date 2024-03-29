
import React from 'react';

class App extends React.Component{
	 constructor(props) {
      super(props);
      this.state = {login: '', password: '',name : '',show : false};

    }
    
    onChangevalue = (event) => {
    	const name = event.target.name;
      	this.setState({[name] : event.target.value});
    }
    show = () => {
    	this.setState({show : true});
    }
    hide = () => {
    	
    	this.setState({login: '', password: '',name : '',show : false});
    }
    onSubmit = (e) =>{
    	e.preventDefault();
    	this.setState({show : true});
    }
    render() {

    	let { name, login, password, show } = {...this.state};
    	
    	
	    return (

	    	
	        <form  onSubmit={this.onSubmit}>
		        <p><label> Name: <input type="text" name="name" value={name}
			                        onChange={this.onChangevalue} autoComplete="off" required/></label></p>
		        <p><label> Login: <input type="text" name="login" value={login}
		                         onChange={this.onChangevalue} autoComplete="off" required/></label></p>

	            <p><label> Password: <input type="password" name="password" value={password}
	                            onChange={this.onChangevalue} required/></label></p>
	            <p><label> <input type="submit"  value="Show values"
	                             /></label></p>  
	            <p><label> <input type="button"  value="Hide"
	                            onClick={this.hide} /></label></p>               
	
	          	<br />
    			{show && <Showvalues name={name} login={login} password={password} />}
	        </form>
	    );
    }
}

function Showvalues(props) {
	let pass = "";
	pass = new Array(props.password.length + 1 ).join('*');
	return (<p> { props.name } { props.login } { pass } </p>);
}


export default App;





