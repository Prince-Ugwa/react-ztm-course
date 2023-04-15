import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  onSearchChange = (event) => {
    // console.log({ startingArray: this.state.monsters });
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      },
      () => {
        // console.log({ endingArray: this.state.monsters });
      }
    );
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }
  render() {
    const { searchField, monsters } = this.state;
    const { onSearchChange } = this;
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        {/*filterMonster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
         })}*/}
        <CardList />
      </div>
    );
  }
}

export default App;
