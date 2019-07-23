import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        data: ''
    }

    componentDidMount() {
        const url = `http://localhost:3001`
        axios.get(url)
            .then(res => {
                this.setState({
                    data:res.data.surname
                });
            })
    }

    render() {
        return (

            <div id="App">
                <p>Loadig Data</p>
                <form action="http://localhost:3001/" method="POST">

                    <input type="text" name="surname" />
                    <input type="submit" value="GetData" />
                </form>

                <p>{this.state.data}</p>

            </div>

        );
    }
}
export default App; 