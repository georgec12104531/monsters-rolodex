import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchFilter from './components/search-filter/search-filter.component';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters: monsters}))
  }

  handleChange = (e) => {
    this.setState({ search:  e.target.value});
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchFilter
          placeholder='Search Monsters' 
          handleChange={ this.handleChange }/>
        <CardList 
          monsters={ filteredMonsters }/>
      </div>
    );
  }
}

export default App;