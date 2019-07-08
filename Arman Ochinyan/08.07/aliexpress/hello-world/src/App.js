
import React from 'react';

import Imgs from './imgs';

class HelloMessage extends React.Component {
  

    render() {
        return (
            <React.Fragment  >

                <Imgs src={require('./img/acc.jpg')} />
                <Imgs src={require('./img/bag.jpg')} />
                <Imgs src={require('./img/g.jpg')} />
                <Imgs src={require('./img/kurt.jpg')} />
                <Imgs src={require('./img/mshoes.jpg')} />
                <Imgs src={require('./img/wshoes.jpg')} />
                <Imgs src={require('./img/acc.jpg')} />
                <Imgs src={require('./img/bag.jpg')} />
                <Imgs src={require('./img/g.jpg')} />
                
            </React.Fragment>
        );
    }
}

export default HelloMessage;





