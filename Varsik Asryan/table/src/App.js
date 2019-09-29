import React, { Component } from 'react'
import Table from './component/Table';
import Mane from './component/Mane';
import Home from './component/Home';
import Notes from './component/Notes';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Mane/>
          <Route  path='/Home'component={Home}/>
          <Route path='/Table'component={Table}/>
          <Route path='/Notes' component={Notes}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;