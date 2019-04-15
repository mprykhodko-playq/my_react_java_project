import React, { Component } from 'react'
import {connect} from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import {getUser, addUser} from "../../actions/userActions";

class UpdateUser extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            eMail: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        const {id, name, eMail, password} = nextProps.user;

        this.setState({
            id,
            name,
            eMail,
            password
        });
    }

    componentDidMount() {
        const {user_id} = this.props.match.params;
        this.props.getUser(user_id);
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedUser = {
            id: this.state.id,
            name: this.state.name,
            eMail: this.state.eMail,
            password: this.state.password
        };

        this.props.addUser(updatedUser, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const {errors} = this.state;
        return(
            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <a href="/" className="btn btn-light">
                                Back to Board
                            </a>
                            <h4 className="display-4 text-center">Add/Update User</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.name
                                        })}
                                        name="name"
                                        placeholder="User Name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        name="eMail"
                                        placeholder="User eMail"
                                        value={this.state.eMail}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="form-control form-control-lg"
                                        name="password"
                                        placeholder="User Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
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
    getUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user.user,
    errors: state.errors
});

export default connect(mapStateToProps, {getUser, addUser})(UpdateUser);