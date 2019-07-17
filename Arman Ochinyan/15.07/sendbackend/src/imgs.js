import React from 'react';

class Imgs extends React.Component {
	constructor(props){
		super(props)
		this.state = {
	  		name : this.props.name,
	  		tesak : this.props.tesak,
	  		price : this.props.price
	  	}
	  	
	}
  	

  	render() {
  		
	    return (
	    	<div >
	        
		        <div className="card col-md" style={{width:340+'px'}}>
	                <img src={this.props.src}  alt={`Baz taking a img `} />   
	                <div className="card-body">
	                
	                    <h4 className="card-title">{this.props.name}</h4>
	                    <p className="card-text">{this.props.tesak}</p>

	                    <p className="card-text">Գինը {this.props.price} դր․</p>
	                   
	                    
	                    <form method="POST" action='http://localhost:3001' >
				            <input type="hidden" value={JSON.stringify(this.state)} name="data"	/>
				            <input type="submit"  value="BUY" />
				        </form>
	                </div>
	            </div>
	        
	        
	        </div>
	    );
	}
}

export default Imgs;