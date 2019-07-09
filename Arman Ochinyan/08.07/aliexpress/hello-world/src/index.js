import React from 'react';
import ReactDOM from 'react-dom';

import Imgs from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Imgs  />, document.getElementById('root'));



serviceWorker.unregister();
