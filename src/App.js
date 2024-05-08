import "./styles.css";

import { Component } from "react";
import StopWatch from "./components/StopWatch/StopWatch.js";

const optionss = [];

class App extends Component {
  state = {};

  render() {
    const {} = this.state;

    return (
      <div className="App">
        <StopWatch />
      </div>
    );
  }
}

export default App;
