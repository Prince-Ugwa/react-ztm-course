import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Prince", lastName: "Odiniya" },
      company: "Brawny_media",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I'm {this.state.name.firstName} {this.state.name.lastName}, I work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: "ugwa", lastName: "omale" } });
              console.log(this.state);
            }}
          >
            Get started
          </button>
        </header>
      </div>
    );
  }
}

export default App;
