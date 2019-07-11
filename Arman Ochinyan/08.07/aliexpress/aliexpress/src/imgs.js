import React from 'react';

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
		(this.state.imgSrc === url.img ) 
		?
			this.setState(prew =>({ imgSrc: changeimg(arr).img, counter: 0}))
		:
			this.setState(prew =>({ imgSrc: url.img, counter: 0}));	
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
	    	<div id={this.props.id}>
	        {del ? 
		        <div className="card col-md" style={{width:340+'px'}}>
	                <img src={imgSrc}  alt={`Baz taking a img `} />   
	                <div className="card-body">
	                    <h4 className="card-title">Գոտի</h4>
	                    <p className="card-text">Բնական կաշի</p>
	                    <p className="card-text">Գինը   16000 դր․</p>
	                    <input type="button" className="btn btn-primary" onClick={this.countAdd} value="BUY" />
	                    <input type="button" className="btn btn-primary" onClick={this.change}  value="Change Picture" />
	                    <input type="button" className="btn btn-primary" onClick={this._destroy}  value="Delete" />
	                    <p>{counter}</p>
	                </div>
	            </div>
	        
	        : <input type="button" className="card" style={{width:340+'px'}} onClick={this._add} value="add card"/> 
	        }
	        </div>
	    );
	}
}

export default Imgs;