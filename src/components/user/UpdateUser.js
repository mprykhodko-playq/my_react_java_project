import React, { Component } from 'react'

class UpdateUser extends Component {
    render() {
        return(
            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <a href="/UserBoard" className="btn btn-light">
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

export default UpdateUser;