
import React from 'react';

import Imgs from './imgs';

class HelloMessage extends React.Component {
  

    render() {
        return (
            <div  >

                <Imgs src={require('./img/acc.jpg')} />
                <Imgs src={require('./img/bag.jpg')} />
                <Imgs src={require('./img/g.jpg')} />
                <Imgs src={require('./img/kurt.jpg')} />
                <Imgs src={require('./img/mshoes.jpg')} />
                <Imgs src={require('./img/wshoes.jpg')} />
                <Imgs src={require('./img/acc.jpg')} />
                <Imgs src={require('./img/bag.jpg')} />
                <Imgs src={require('./img/g.jpg')} />
                <Imgs src={require('./img/kurt.jpg')} />
                <Imgs src={require('./img/mshoes.jpg')} />
                <Imgs src={require('./img/wshoes.jpg')} />
                
            </div>
        );
    }
}

export default HelloMessage;




