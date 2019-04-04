import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteUser} from "../../actions/userActions"

class UserItem extends Component{

    onDeleteClick(user_id) {
        this.props.deleteUser(user_id);
    }

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
                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, user.id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

UserItem.propTypes = {
    deleteUser: PropTypes.func.isRequired
};

export default connect(null, {deleteUser}) (UserItem);