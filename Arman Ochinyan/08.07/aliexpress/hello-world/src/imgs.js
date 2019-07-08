import React from 'react';

class Imgs extends React.Component {
  	
  	state={
		counter : 0,
	}
	countAdd = () => this.setState({ counter: this.state.counter + 1})
		
  	render() {

	    return (
	        <div>
		        <div class="card col-md div" style={{width:320+'px'}}>
	                <img src={this.props.src}  alt="Responsive image" />   
	                <div class="card-body">
	                    <h4 class="card-title">Գոտի</h4>
	                    <p class="card-text">Բնական կաշի</p>
	                    <p class="card-text">Գինը   16000 դր․</p>
	                    <a class="btn btn-primary" onClick={this.countAdd} >BUY</a>
	                    <p>{this.state.counter}</p>
	                </div>
	            </div>
	        </div>
	    );
	}
}

export default Imgs;