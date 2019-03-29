import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AddUser extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            eMail: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const newUserTask = {
            name: this.state.name,
            eMail: this.state.eMail,
            password: this.state.password
        }
        console.log(newUserTask);
    }

    render() {
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
                                        className="form-control form-control-lg"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        placeholder="User Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        name="eMail"
                                        value={this.state.eMail}
                                        onChange={this.onChange}
                                        placeholder="User eMail"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="form-control form-control-lg"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        placeholder="User Password"
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

export default AddUser;