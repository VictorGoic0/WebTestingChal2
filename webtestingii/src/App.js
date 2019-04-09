import React, { Component } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";
import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  foulBall = () => {
    this.setState(prevState => ({
      strikes: prevState.strikes < 2 ? prevState.strikes + 1 : prevState.strikes
    }));
  };

  ball = () => {
    this.setState(prevState => ({
      balls: prevState.balls === 3 ? 0 : prevState.balls + 1,
      strikes: prevState.balls === 3 ? 0 : prevState.strikes
    }));
  };

  strike = () => {
    this.setState(prevState => ({
      balls: prevState.strikes === 2 ? 0 : prevState.balls,
      strikes: prevState.strikes === 2 ? 0 : prevState.strikes + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
