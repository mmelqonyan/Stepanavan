import React from 'react';
import './App.css';



class Bloks extends React.Component{
	constructor(props){
		super(props);
		this.state={text1: '', text2: '', text3: ''};
		this.inputText1=this.inputText1.bind(this);
		this.inputText2=this.inputText2.bind(this);
		this.inputText3=this.inputText3.bind(this);
		this.sub=this.sub.bind(this);
}

inputText1(e) {
    this.setState({text1: e.target.value});
};

inputText2(e) {
		this.setState({text2: e.target.value});
}

inputText3(e) {
		this.setState({text3: e.target.value});
};

sub(){
 let insert=this.state.text1+' '+this.state.text2+' '+this.state.text3
  this.setState({final:insert})
}

	render(){
 	 return (
    <div>     
			<input  onChange={this.inputText1} value={this.state.text1}/>
			<input  onChange={this.inputText2} value={this.state.text2}/>
			<input  onChange={this.inputText3} value={this.state.text3}/>
			<button onClick={this.sub}>Submit</button>
			<p>{this.state.final}</p>
    </div>
  )
}
}

export default Bloks;
