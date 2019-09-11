import React, { Component } from 'react';
import "./mane.css"
import Table from'./Table'

class Mane extends Component{
    state ={
    links:[
        {href:"./Home",label:"Home"  },
        {href:"./Notes",label:"Notes"  },
        {href:"./Table",label:"Data" },
        {href:"./Geallery", label:"Geallery"}
    ]
}
    renderMenuTab(){ 
        return   this.state.links.map((links) => {
                 const{href,label} = links;
        return(
            <li className="li">
            <a href={href}>{label}</a>
            </li>
          );
         })
        }
        
        render(){
            return(
            <div>
            <nav className="nav">
                <ul>
                    {this.renderMenuTab()} 
                </ul>
            </nav>
            </div>
            );
        }
    }
        export default Mane;