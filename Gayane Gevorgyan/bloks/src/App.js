import React from 'react';
import './App.css';



class Bloks extends React.Component{
	constructor(props){
		super(props);
		this.state={text: ''};
		this.inputText=this.inputText.bind(this);

}

inputText(e) {
    this.setState({ value: e.target.value });
};


	render(){
 	 return (
    <div>     
			<input  onChange={this.inputText} value1={this.state.text1}/>
			<input  onChange={this.inputText} value2={this.state.text2}/>
			<input  onChange={this.inputText} value3={this.state.text3}/>
			<button onclick={() => {this.onChange()}}>Submit</button>
			<p>{this.state.text1} {this.state.text2} {this.state.text3}</p>
    </div>
  );
}
}

export default Bloks;
