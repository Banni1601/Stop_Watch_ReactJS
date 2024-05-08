import "./StopWatch.css";
//import { v4 } from "uuid";
import { Component } from "react";
//import List from "./components/List/list.jsx";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Minutes: 0,
      Seconds: 0,
      isTimeRunning: false,
      rst: false,
      md: 0,
      sd: 0,
    };
  }
  RestartTheTime = () => {
    const { Minutes, Seconds, isTimeRunning, rst } = this.state;
    if (rst) {
      if (isTimeRunning) {
        this.setState({ Seconds: 0, Minutes: 0 });
        //this.setState({ isTimeRunning: true });
      } else if (!isTimeRunning) {
        this.setState({ Seconds: 0, Minutes: 0, isTimeRunning: true });
        this.timeId = setInterval(this.Action, 1000);
      }
    }
  };

  Action = () => {
    const { Minutes, Seconds, isTimeRunning } = this.state;
    if (Seconds < 61) {
      if (Seconds === 60) {
        this.setState({ Minutes: Minutes + 1, Seconds: 0 });
      } else {
        if (Seconds < 9) {
          this.setState({ Seconds: Seconds + 1, sd: 0 });
        } else if (Seconds >= 9) {
          this.setState({ Seconds: Seconds + 1, sd: "" });
        }
      }
    }
  };

  StartTimeCount = () => {
    const { Minutes, Seconds, isTimeRunning, rst } = this.state;
    if (!isTimeRunning) {
      this.timeId = setInterval(this.Action, 1000);
      this.setState({ isTimeRunning: true, rst: true });
    }
  };

  stopTheTime = () => {
    const { isTimeRunning } = this.state;
    if (isTimeRunning) {
      clearInterval(this.timeId);
      this.setState({ isTimeRunning: false });
    }
  };

  render() {
    const { Minutes, Seconds, md, sd } = this.state;
    return (
      <div className="App">
        <h1>
          {md}
          {Minutes}:{sd}
          {Seconds}
        </h1>
        <button onClick={this.StartTimeCount}>Start</button>
        <button onClick={this.stopTheTime}>Stop</button>
        <button onClick={this.RestartTheTime}>Restart</button>
      </div>
    );
  }
}

export default StopWatch;
