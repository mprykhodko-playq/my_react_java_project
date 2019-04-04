import React, { Component } from 'react'
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {getUser} from "../../actions/userActions";

class UpdateUser extends Component {

    componentDidMount() {
        const {user_id} = this.props.match.params;
        this.props.getUser(user_id);
    }

    render() {
        return(
            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <a href="/" className="btn btn-light">
                                Back to Board
                            </a>
                            <h4 className="display-4 text-center">Add/Update User</h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="name" placeholder="User Name"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" name="eMail" placeholder="User eMail"></textarea>
                                </div>
                                <div>
                                    <textarea className="form-control form-control-lg" name="password" placeholder="User Password"></textarea>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateUser.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors
});

export default connect(mapStateToProps, {getUser})(UpdateUser);