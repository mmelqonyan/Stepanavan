import React from 'react';


class Imgs extends React.Component {
  	
  	state={
		counter : 0,
	}
	countAdd = () => this.setState({ counter: this.state.counter + 1})
		
  	render() {

	    return (
	        <React.Fragment>

	            <img src={this.props.src} alt="img" />
	            <div>
		            <input type="button" onClick={this.countAdd} value="Buy" />
					<p>{this.state.counter}</p>
	            </div>
	        </React.Fragment>
	    );
	 }
}

export default Imgs;