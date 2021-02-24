import React, { Component } from 'react';
// import CargoList from "./cargoList/index";
import Counter from "./counter/counter";
import Count from './counter/count';
class App extends Component {
  render() {
    return (
      <div>
        {/* <CargoList /> */}
        <Counter />
        <Count />
      </div>
    );
  }
}

export default App;
