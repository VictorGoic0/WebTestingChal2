import React, { Component } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";
import "./App.css";

class App extends Component {
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
