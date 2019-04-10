import React, { Component } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";
import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    outs: 0,
    runs: 0
  };

  baseHit = () => {
    this.setState(prevState => ({
      balls: 0,
      strikes: 0,
      runs: prevState.runs + 1
    }));
  };

  foulBall = () => {
    this.setState(prevState => ({
      strikes: prevState.strikes < 2 ? prevState.strikes + 1 : prevState.strikes
    }));
  };

  strike = () => {
    this.setState(prevState => ({
      balls: prevState.strikes === 2 ? 0 : prevState.balls,
      strikes: prevState.strikes === 2 ? 0 : prevState.strikes + 1,
      outs: prevState.strikes === 2 ? prevState.outs + 1 : prevState.outs
    }));
  };

  ball = () => {
    this.setState(prevState => ({
      balls: prevState.balls === 3 ? 0 : prevState.balls + 1,
      strikes: prevState.balls === 3 ? 0 : prevState.strikes,
      runs: prevState.balls === 3 ? prevState.runs + 1 : prevState.runs
    }));
  };

  render() {
    return (
      <div className="App">
        <Display
          strikes={this.state.strikes}
          balls={this.state.balls}
          runs={this.state.runs}
          outs={this.state.outs}
        />
        <Dashboard
          baseHit={this.baseHit}
          foulBall={this.foulBall}
          strike={this.strike}
          ball={this.ball}
        />
      </div>
    );
  }
}

export default App;
