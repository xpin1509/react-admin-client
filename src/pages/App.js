import React, { Component } from 'react';
import CargoList from "./cargoList/index";
import Counter from "./counter/counter";
import Count from './counter/count';
import ReduxSagaPage from "./reduxSagaPage";
import CountDown from "./countDown/countDown";
class App extends Component {
  render() {
    return (
      <div>
        {/* <CargoList /> */}
        {/* <Counter /> */}
        {/* <Count /> */}
        {/* <ReduxSagaPage /> */}
        <CountDown />
      </div>
    );
  }
}

export default App;
