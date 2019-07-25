import React from 'react';

class Name extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.nameChange = this.nameChange.bind(this);
        }
    
    
          nameChange(event) {
                 this.setState({value: event.target.value});
              }
    
              render() {
                     return (
                       <form>
                         <input tipe = 'text' value={this.state.value} onChange={this.nameChange} />
                         </form>
                     );
              }
            }

            export default Name;