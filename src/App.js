import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { subscribeUser } from "./subscription";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Push notifications demo.</p>
          <button className="App-link" onClick={subscribeUser}>
            Subscribe To Push Notification
          </button>
        </header>
      </div>
    );
  }
}

export default App;
