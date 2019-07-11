
import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component{
	 constructor(props) {
      super(props);
      this.state = {login: '', password: '',name : ''};

      
    }
    
    onChangevalue = (event) => {
    	const name = event.target.name;
      	this.setState({[name] : event.target.value});
    }
    
    render() {

    	let { name, login, password } = {...this.state};
    	
	    return (
	    	
	        <form>
		        <p><label> Name: <input type="text" name="name" value={name}
			                        onChange={this.onChangevalue} autoComplete="off"/></label></p>
		        <p><label> Login: <input type="text" name="login" value={login}
		                         onChange={this.onChangevalue} autoComplete="off"/></label></p>

	            <p><label> Password: <input type="password" name="password" value={password}
	                            onChange={this.onChangevalue} /></label></p>
	
	          	<br />
    			<Showvalues name={name} login={login} password={password} />
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





