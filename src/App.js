import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import UserBoard from "./components/UserBoard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddUser from "./components/user/AddUser";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={UserBoard}/>
                <Route exact path="/addUser" component={AddUser}/>
            </div>
        </Router>
    );
  }
}

export default App;
