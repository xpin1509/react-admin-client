import React, { Component } from 'react';
// import CargoList from "./cargoList/index";
import Counter from "./counter/counter";
import Count from './counter/count';
import ReduxSagaPage from "./reduxSagaPage";
class App extends Component {
  render() {
    return (
      <div>
        {/* <CargoList /> */}
        {/* <Counter /> */}
        {/* <Count /> */}
        <ReduxSagaPage />
      </div>
    );
  }
}

export default App;
