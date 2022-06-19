import React from 'react';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      name: "Edson",
      age: 20,
      city: "Itapoá"
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name} {this.state.age} {this.state.city}
          </p>
          <button onClick={() => {
            this.setState((prevState, props) => {
              return {
                name: "Neuza",
                age: 52
              }
            },
            () => {
              console.log(this.state);
            })
          }}>Change</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
