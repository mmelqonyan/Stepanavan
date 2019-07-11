import React from 'react';
import changeimg from './changePicture';
import arr from "./imagesTypeObj";

class Imgs extends React.Component {
  	
  	constructor(props){
  		super(props);
  		this.state={
			counter : 0,
			imgSrc : this.props.src
		}
  	}
 
	countAdd = () => this.setState(prew =>({ counter: prew.counter + 1 }));
	change = () => {
		let url = changeimg(arr,this.state.imgSrc);
		(this.state.imgSrc === url ) 
		?
			this.setState(prew =>({ imgSrc: changeimg(arr), counter: 0}))
		:
			this.setState(prew =>({ imgSrc: url, counter: 0}));	
	}

  	render() {
  		let { counter , imgSrc } = this.state;
	    return (
	        <div>
		        <div class="card col-md" style={{width:340+'px'}}>
	                <img src={imgSrc}  alt={`Baz taking a img `} />   
	                <div class="card-body">
	                    <h4 class="card-title">Գոտի</h4>
	                    <p class="card-text">Բնական կաշի</p>
	                    <p class="card-text">Գինը   16000 դր․</p>
	                    <input type="button" class="btn btn-primary" onClick={this.countAdd} value="BUY" />
	                    <input type="button" class="btn btn-primary" onClick={this.change}  value="Change Picture" />
	                    <p>{counter}</p>
	                </div>
	            </div>
	        </div>
	    );
	}
}

export default Imgs;