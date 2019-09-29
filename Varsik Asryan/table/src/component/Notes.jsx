import React, { Component } from 'react';
import { IoIosAdd } from "react-icons/io";

class Notes extends Component{
    state={
        notesName:false,
        notesIcon:true,
        notesButton:false,
  }

  renderNotesName() {
    return (
        <div>
            <ul>
                <li>Ajavzjan Anna</li>
                <li>Ajavzjan Anna</li>
                <li>Ajavzjan Anna</li>
                <li>Ajavzjan Anna</li>
            </ul>
        </div>
 );
}

onClickIcon =() => {
    this.setState= ({
       notesButton:true,
    })
}

renderNotesIcon(){
    return(
        <div>
            <button  onClick={this.onClickIcon}>< IoIosAdd/></button>  
        </div>
    );
}

renderNotesButton(){
    return(
                <div>
               
                <input type="text"></input>
                <button>Ad not</button>

            </div>
        );

    }
    render(){
        const{ notesName, notesIcon, notesButton }=this.state
        return(
        <div>
            {this.renderNotesName()}
            {this.renderNotesIcon()}
            {this.renderNotesButton()} 
        </div>
        )
    }

}
export default Notes;