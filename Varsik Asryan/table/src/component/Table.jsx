import React, { Component } from 'react';
import './table.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

class Table extends Component {
   state = {
      data: [
         { id: 1, name: 'Anna', surname: 'Ananyan', score: 10, isEditMode: false },
         { id: 2, name: 'Alla', surname: 'Balayan', score: 5, isEditMode: false },
         { id: 3, name: 'Vahan', surname: 'Manasyan', score: 15, isEditMode: false },
         { id: 4, name: 'Gor', surname: 'Ayvazyan', score: 20, isEditMode: false }
      ]
   }



onClickPen = (e) => {
   this.setState({
      isEditMode: true,
      score: <input type="text" />,
   })
}

onClickFaCheckCircle = (e) => {
this.setState({
      isEditMode: false,
     
   })
}


onChange = (e) => {
   this.setState({
      isEditMode: true,
      score: <input type="trext" />,
   })
}

renderTableHeader() {
   return (
   <tr id="data">
      <th id="th" classsName="colum">ID</th>
      <th id="th">Name</th>
      <th id="th">Surname</th>
      <th id="th">Score</th>
   </tr>

   );
}

renderTableData() {
    return this.state.data.map((data, index) => {
      const { id, name, surname, score, } = data //destructuring
          return (
          <tr id="tr" key={this.state.data.id}>
            <td id="td" class="colum">{id}</td>
            <td id="td" >{name}</td>
            <td id="td">{surname}</td>
            {/* <td id ="td" key ={index}>{this.state.isEditMode ? <input type="text" onChange={this.onChange}  /> : <span>{score}</span>}
            {this.state.isEditMode ? <button  onClick={this.onChange}><FaCheckCircle /></button> : <button  key={id} onClick={this.changeEditMode}><FaPen/></button>}</td> */}
            <td id="td">{this.state.isEditMode ? <input type="text" onChange={(e) => this.onChange(id, e)} /> : <span>{score}</span>}

               {this.state.isEditMode ? <button key={id} onClick={(e) => this.onClickFaCheckCircle(id, e)}><FaCheckCircle /></button> : <button onClick={(e) => this.onClickPen(id, e)} ><FaPen /></button>}
            </td>
         </tr>
      )
   })
}

render() { 
   return (
      <div>
         <h1 align="center">My Table</h1>
         <table id='data'>
            <tbody>
               {this.renderTableHeader()}
               {this.renderTableData()}
            </tbody>
         </table>
      </div>
   )
}
}

export default Table;



