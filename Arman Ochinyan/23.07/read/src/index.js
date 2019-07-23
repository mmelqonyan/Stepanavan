import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';


class App extends React.PureComponent {
		
		constructor(props){
			super(props)

			this.state = {
				value : ""
			}
		}
		componentDidMount() {
						
			fetch('/name')
				.then(res => res.json())
				.then(value => this.setState({ value : value.value })) 
				.catch(e => console.log(e))   
		
		}
		
		handleSubmit = (event) => { 
				
			fetch('/name', {
				method: 'POST',			
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: this.refs.name.value
			})

			.then(function(response) {
			    return response.text().then(function(text) {
			        return text ? JSON.parse(text) : {}
				})
			})
			.then(function(body){
			    console.log(body);    
			});

		};
		
		render(){
			return (
				<>
					<p> Name { this.state.value}</p>
					<form onSubmit={this.handleSubmit}>
						<input type="text" ref="name" name="name" placeholder="Enter name" />
						<input type="submit" value="Send backend" />
					</form>
				</>
			)
		}
}



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
