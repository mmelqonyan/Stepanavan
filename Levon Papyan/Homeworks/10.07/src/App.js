import React, { Component } from 'react';
import './App.css';
import json from './json';


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
    showMe: true
  };
  onImageChangerForwardClickListener = () => {
    this.calculatePosition = () => {
      if (this.state.currentImagePosition + 1 > this.props.images.length - 1) {
        return 0;
      } else {
        return this.state.currentImagePosition + 1;
      }
    }
    this.setState(() => ({
      currentImagePosition: this.calculatePosition()
    }));
  };
  onImageChangerBackwardClickListener = () => {
    this.calculatePosition = () => {
      //console.log(this.props.images.length);
      if (this.state.currentImagePosition - 1 < 0) {
        return this.props.images.length - 1;
      } else {
        return this.state.currentImagePosition - 1;
      }
    }
    this.setState(() => ({
      currentImagePosition: this.calculatePosition()
    }));
  };
  addRating = () => {
    this.setState(({ rating }) => ({
      rating: rating + 1
    }));
  };
  showAndHigh() {
    this.setState({
      showMe: !this.state.showMe
    })
  };
  render() {
    return (
      <div>

        {this.state.showMe ?
          <div className="card">

            <div className="card-img">
              <img
                src={this.props.images[this.state.currentImagePosition]}
                alt={this.state.currentImagePosition} />
            </div>
            <h3>{this.props.type}</h3>
            <p>{this.props.price}</p>
            <p>Buy</p>

            <button onClick={this.onImageChangerForwardClickListener}>Previous</button>
            <button onClick={this.addRating}>{this.state.rating}</button>
            <button onClick={this.onImageChangerBackwardClickListener}>Next</button>
          </div>
          : null}
        <button onClick={() => this.showAndHigh()}>Show And High</button>
      </div>
    )
  }
}




export default App;







