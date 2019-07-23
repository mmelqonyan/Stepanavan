import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


class App extends React.PureComponent {
        state = {
        	value : localStorage.getItem('value')
        }
		add = () => {
			if (!document.getElementById('iid').value) {return}	
			localStorage.setItem('value',document.getElementById('iid').value) ;
			this.setState({value : document.getElementById('iid').value });
			document.getElementById('iid').value = "";
		}

        render(){
          	return (
          		<div>
	          		<p> { this.state.value ? this.state.value : 'text' } </p> 
	          		<input type="text" id="iid" />
	          		<input type="button" value="chenge" onClick={this.add} />
	          	</div>
          	)
        }
}



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
