import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import UserBoard from "./components/UserBoard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddUser from "./components/user/AddUser";
import {Provider} from "react-redux";
import store from "./store";
import UpdateUser from "./components/user/UpdateUser";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={UserBoard}/>
                    <Route exact path="/addUser" component={AddUser}/>
                    <Route exact path="/updateUser/:user_id" component={UpdateUser}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
