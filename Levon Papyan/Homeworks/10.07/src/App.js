import React, { Component } from 'react';
import './App.css';



const json = {
  jacket: {
    name: "JACET",
    price: "3000$",
    images: [
      require('./image/kurtka/kurtka.jpg'),
      require('./image/kurtka/kurtka1.jpg'),
      require('./image/kurtka/kurtka2.jpg'),
      require('./image/kurtka/kurtka3.jpg')
    ]
  },
  sviter: {
    name: "SWEATER",
    price: "2000$",
    images: [
      require('./image/svitr/svitr.jpeg'),
      require('./image/svitr/svitr1.jpg'),
      require('./image/svitr/svitr2.jpg'),
      require('./image/svitr/svitr3.jpg'),
    ]
  },
  shalvar: {
    name: "TROUSERS",
    price: "2000$",
    images: [
      require('./image/shalvar/shalvar.jpg'),
      require('./image/shalvar/shalvar1.jpg'),
      require('./image/shalvar/shalvar2.jpg'),
      require('./image/shalvar/shalvar3.jpg'),
    ]
  },
  xar: {
    name: "CLOTHES",
    price: "2000$",
    images: [
      require('./image/xar/xar.jpg'),
      require('./image/xar/xar1.jpg'),
      require('./image/xar/xar2.jpg'),
      require('./image/xar/xar3.jpg'),
    ]
  },
  mayka: {
    name: "MIKE",
    price: "500$",
    images: [
      require('./image/mayka/mayka.jpg'),
      require('./image/mayka/mayka1.jpg'),
      require('./image/mayka/mayka2.jpg'),
      require('./image/mayka/mayka3.jpg'),
    ]
  },
  short: {
    name: "SHORTS",
    price: "900$",
    images: [
      require('./image/short/short.jpg'),
      require('./image/short/short1.jpg'),
      require('./image/short/short2.jpg'),
      require('./image/short/short3.jpg'),
    ]
  }

}

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







