import React from 'react';
import ReactDOM from 'react-dom';

import changeimg from './changePicture';
import arr from "./imagesTypeObj";

class Imgs extends React.Component {
  	
  	constructor(props){
  		super(props);
  		this.state={
			counter : 0,
			imgSrc : this.props.src,
			del : true
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
	_destroy = (e) => {
   
	    this.setState(prew =>({ del: false}));
	}
	_add = (e) => {
   
	    this.setState(prew =>({ del: true}));
	}
  	render() {
  		let { counter , imgSrc , del } = this.state;
	    return (
	        (del) ? <div>
		        <div class="card col-md" style={{width:340+'px'}}>
	                <img src={imgSrc}  alt={`Baz taking a img `} />   
	                <div class="card-body">
	                    <h4 class="card-title">Գոտի</h4>
	                    <p class="card-text">Բնական կաշի</p>
	                    <p class="card-text">Գինը   16000 դր․</p>
	                    <input type="button" class="btn btn-primary" onClick={this.countAdd} value="BUY" />
	                    <input type="button" class="btn btn-primary" onClick={this.change}  value="Change Picture" />
	                    <input type="button" class="btn btn-primary" onClick={this._destroy}  value="Delete" />
	                    <p>{counter}</p>
	                </div>
	            </div>
	        </div>
	        : <input type="button" class="card" style={{width:340+'px'}} onClick={this._add} value="add card"/> 


	    );
	}
}

export default Imgs;