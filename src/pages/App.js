import React, { Component } from 'react';
import CargoList from "./cargoList/index";
import Counter from "./counter/counter";

class App extends Component {
  render() {
    return (
      <div>
        {/* <CargoList /> */}
        <Counter />
      </div>
    );
  }
}

export default App;
