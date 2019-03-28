import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import UserBoard from "./components/UserBoard";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Navbar/>
            <UserBoard/>
        </div>
    );
  }
}

export default App;
