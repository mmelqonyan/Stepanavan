import React from 'react';
import ReactDOM from 'react-dom';

export default class MyComponent extends React.Component {

  _destroy = (e) => {
    
    ReactDOM.unmountComponentAtNode(this.props.self);
  }
  
  render()
  {
    return (
      <div onClick={this._destroy.bind(this)}>
        {'Destroy Me'}
      </div>
    );
  }
}
 


