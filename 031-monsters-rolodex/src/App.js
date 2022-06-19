import React from 'react';

import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';

import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ""
    }
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const monsters = await response.json();

    this.setState((prevState, props) => {
      return {
        monsters: monsters
      }
    },
    () => {
      console.log(this.state);
    });
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return {
        searchString
      }
    });
  }

  render() {

    const { monsters, searchString } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    })

    return (
      <div className="app">
        <h1 className="app-title">Monster Roledex</h1>
        <SearchBox 
        className="search-box" 
        placeholder="pesquise monstros" 
        onSearchChange={this.onSearchChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
  
}

export default App;