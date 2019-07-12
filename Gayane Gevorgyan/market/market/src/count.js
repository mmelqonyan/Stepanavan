class App extends React.Component {
 
   constructor(props){
       super(props);
       this.state={ count: 1}
   }
 
  onclick(type){
      this.setState(prevState => {
         return {count:  prevState.count + 1}
      });
  }

   render() {
    return (
      <div>
        Count: {this.state.count}
        <br/>
       
        <input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc'/>
        
       </div>
     )
   }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
