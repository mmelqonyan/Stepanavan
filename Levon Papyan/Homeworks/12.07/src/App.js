//import React from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    state = {
        nameValue: '',
        surnameValue: '',
        othernameValue: '',
        showData: {
            name: '',
            surname: '',
            othername: ''

        }
    }

    onChangeName = ({ target: { value } }) => {
        this.setState({
            nameValue: value
        })
    }

    onChangeSurname = ({ target: { value } }) => {
        this.setState({
            surnameValue: value
        })
    }

    onChangeOthername = ({ target: { value } }) => {
        this.setState({
            othernameValue: value
        })
    }

    handleShow = (e) => {
        e.preventDefault();
        const { nameValue, surnameValue, othernameValue } = this.state;
        this.setState({
            nameValue: '',
            surnameValue: '',
            othernameValue: '',
            showData: {
                name: nameValue,
                surname: surnameValue,
                othername: othernameValue
            }

        })

    }

    render() {
        const { nameValue, surnameValue, othernameValue, showData } = this.state;
        const {name, surname, othername } = showData
        return (
            <form>
                <label>Name:
                 <input type="text" name="name" value={nameValue} onChange={this.onChangeName} />
                </label>


                <label>Surname:
                  <input type="text" name="surname" value={surnameValue} onChange={this.onChangeSurname} />
                </label>

                <label>Othername:
                  <input type="text" name="othername" value={othernameValue} onChange={this.onChangeOthername} />
                </label>
                <button onClick={this.handleShow}>Show</button>
                 <p>{name} {surname} {othername}</p>

            </form>
        )
    }


}

export default App;