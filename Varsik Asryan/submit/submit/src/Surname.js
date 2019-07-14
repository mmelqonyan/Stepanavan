import React from 'react';

class Surname extends React.Component {
              constructor(props) {
                super(props);
                this.state = {value: ''};
            
                this.surnameChange = this.surnameChange.bind(this);
              }
          
          
                surnameChange(event) {
                       this.setState({value: event.target.value});
                    }
          
                    render() {
                           return (
                             <form>
                               <input tipe = 'text' value={this.state.value} onChange={this.surnameChange} />
                               </form>
                           );
                    }
                  }

                  export default Surname;
    