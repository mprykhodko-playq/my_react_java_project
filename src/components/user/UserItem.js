import React, { Component } from "react";

class UserItem extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    ID: {user.id}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text text-truncate">
                        {user.eMail}
                    </p>
                    <p className="card-text text-truncate">
                        {user.password}
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