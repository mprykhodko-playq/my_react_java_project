import React, { Component } from "react";
import {Link} from "react-router-dom";
import UserItem from "./user/UserItem";

class UserBoard extends Component{
    render(){
        return (
            <div className="container">
                <Link to="/addUser" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle">Create new user</i>
                </Link>
                <br/>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Users Table</h3>
                                </div>
                            </div>
                            <UserItem/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBoard;