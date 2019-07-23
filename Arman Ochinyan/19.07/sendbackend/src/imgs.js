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
  	ch_price = (e) => {

  		this.setState( {
  			price : e.target.value
  		})
  	}
  	
  	render() {
  		
	    return (

	    	<div >
	        
		        <div className="card col-md" style={{width:340+'px'}}>
	                
	                <img src={this.props.src}  alt={`Baz taking a img `} />   
	                <div className="card-body">
	                
	                    <h4 className="card-title">{this.props.name}</h4>
	                    <br />
	                    <p className="card-text"> { this.props.tesak } </p>
	                    <br />
	                    <p className="card-text"> Գինը {this.state.price} դր․</p>
	                    <br />  

	                    <form method="POST" action='http://localhost:3001/' >
				            
				            <input type="hidden" value={JSON.stringify(this.state)} name="data"	/> 
				            <input type="number" name="price" min="0" placeholder="Change Price" onChange={this.ch_price} />
				            <input type="submit"  value="BUY" />
				        
				        </form>
				        
				       
	                </div>
	            </div>
	        
	        </div>
	    );
	}
}
Imgs.defaultProps = {
  price: 0,
}

export default Imgs;