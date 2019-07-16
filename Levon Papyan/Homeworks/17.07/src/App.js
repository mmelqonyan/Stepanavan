import React, { Component } from 'react';
import './App.css';
import json from './json'


class App extends Component {
  render() {
    const cards = [];
    return (
      <div className="App, list">
        {(() => {
          for (let item in json) {
            cards.push(<Card key={item} images={json[item].images} type={json[item].name} price={json[item].price} />);
          }
          return cards;
        })()}
      </div>)
  }
}


class Card extends Component {



   state = {
      currentImagePosition: 0,
      rating: 0,
      gin: this.props.price
  };

  sendToDB(what){
    fetch('http://localhost:1337/elac', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(what)
    }).catch(e => {console.error(e)});
  }

  
  onImageChangerBackwardClickListener = () => {
    this.calculatePosition = () => {
      console.log(this.props.images.length);
      if (this.state.currentImagePosition - 1 < 0) {
        return this.props.images.length - 1;
      } else {
        return this.state.currentImagePosition - 1;
      }
    }
    
  };

 
 
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img
            src={this.props.images[this.state.currentImagePosition]}
            alt={this.state.currentImagePosition} />
        </div>
        <h3>{this.props.type}</h3>
        <p id="p">{this.props.price} $</p>
        <button onClick={() => {this.sendToDB({'type':this.props.type, 'price':this.props.price})}}>Show</button>
      </div>
    )
  }
}

export default App;







