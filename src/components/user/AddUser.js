import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addUser} from "../../actions/userActions";
import classnames from "classnames";

class AddUser extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            eMail: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            eMail: this.state.eMail,
            password: this.state.password
        };
        // console.log(newUserTask);
        this.props.addUser(newUser, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return(
            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add/Update User</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.name
                                        })}
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        placeholder="User Name"
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className={classnames("form-control form-control-lg",{
                                            "is-invalid": errors.eMail
                                        })}
                                        name="eMail"
                                        value={this.state.eMail}
                                        onChange={this.onChange}
                                        placeholder="User eMail"
                                    />
                                    {errors.eMail && (
                                        <div className="invalid-feedback">{errors.eMail}</div>
                                    )}
                                </div>
                                <div>
                                    <textarea
                                        className={classnames("form-control form-control-lg",{
                                            "is-invalid": errors.password
                                        })}
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        placeholder="User Password"
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
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

AddUser.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {addUser}) (AddUser);