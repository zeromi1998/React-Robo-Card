import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/searchBox/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robo Karten </h1>
        <SearchBox
          placeholder="Search Robo"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonster}></CardList>
      </div>
    );
  }
}

export default App;
