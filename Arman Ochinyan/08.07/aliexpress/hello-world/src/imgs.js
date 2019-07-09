import React from 'react';

class Imgs extends React.Component {
  	
  	state={
		counter : 0,
	}
	countAdd = () => this.setState({ counter: this.state.counter + 1})
		
  	render() {

	    return (
	        <div>
		        <div className="card col-md" style={{width:300+'px'}}>
	                    <img src={this.props.src}  alt="Responsive image" />   
	                    <div className="card-body">
	                        <h4 className="card-title">Գոտի</h4>
	                        <p className="card-text">Բնական կաշի</p>
	                        <p className="card-text">Գինը   16000 դր․</p>
	                        <a className="btn btn-primary" onClick={this.countAdd} >BUY</a>
	                    	<p>{this.state.counter}</p>
	                    </div>
	            </div>
	        </div>
	    );
	}
}

export default Imgs;