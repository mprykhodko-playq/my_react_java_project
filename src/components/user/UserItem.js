import React, { Component } from "react";

class UserItem extends Component {
    render() {
        return (
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
                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default UserItem;