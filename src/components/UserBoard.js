import React, { Component } from "react";
import {Link} from "react-router-dom";
import UserItem from "./user/UserItem";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../actions/userActions";

class UserBoard extends Component{
    componentDidMount() {
        this.props.getBacklog();
    }

    render(){
        const {users} = this.props.users

        let BoardContent;
        let userTableItems = [];
        let aAAPasswordItems = [];

        const BoardAlgorithm = users => {
            if(users.length < 1){
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Users
                    </div>
                )
            } else {
                const usersUsers = users.map(user =>(
                    <UserItem key = {user.id} user={user}/>
                ));

                for (let i = 0; i<usersUsers.length; i++){
                    if (usersUsers[i].props.user.password === "aaaaaa") {
                        aAAPasswordItems.push(usersUsers[i])
                    } else {
                        userTableItems.push(usersUsers[i])
                    }
                }

                return (
                    <React.Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-secondary text-white">
                                            <h3>Users Table</h3>
                                        </div>
                                    </div>
                                    {userTableItems}
                                </div>

                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-secondary text-white">
                                            <h3>Another Table</h3>
                                        </div>
                                    </div>
                                    {aAAPasswordItems}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        };

        BoardContent = BoardAlgorithm(users);

        return (
            <div className="container">
                <Link to="/addUser" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle">Create new user</i>
                </Link>
                <br/>
                <hr/>
                {BoardContent}
            </div>
        );
    }
}

UserBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.user
});

export default connect(mapStateToProps, {getBacklog})(UserBoard);