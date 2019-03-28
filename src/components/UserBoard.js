import React, {Component} from "react";

class UserBoard extends Component{
    render(){
        return (
            <div className="container">
                <a href="/" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle">Create new user</i>
                </a>
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

                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: idididid
                                </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">Name</h5>
                                    <p className="card-text text-truncate">
                                        eMail
                                    </p>
                                    <p className="card-text text-truncate">
                                        Password
                                    </p>
                                    <a href="/" className="btn btn-primary">
                                        View / Update
                                    </a>
                                    <button class="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBoard;