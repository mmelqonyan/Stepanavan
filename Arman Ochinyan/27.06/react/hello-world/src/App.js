//Please run a 'npm start' and 'node server' in terminal, so the program will work correctly

import React from 'react';

import customData from './js.json';
import './App.css';

class HelloMessage extends React.Component {
  

  render() {
    return (
        <form  action="http://localhost:3001/" method="POST">
            <label>
                Send Json file data to the database : 
                <input type="hidden" value={JSON.stringify(customData) } name="email"   />
            </label>
           
            <input type="submit" value="Submit" />
            
        </form>
    );
  }
}


export default HelloMessage;
