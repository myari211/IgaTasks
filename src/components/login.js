import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
            <div className="container">
                <div className="box">
                    <div className="row mt-long d-flex justify-content-center">
                        <div className="col-lg-6">
                            <div className="card shadow">
                                <div className="card-body">
                                    <div className="row d-flex justify-content-center mb-4">
                                        <h4>Sign In</h4>
                                    </div>
                                    <div className="row mt-4 pr-4 pl-4">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" placeholder="Type Your Email"></input>
                                    </div>
                                    <div className="row mt-4 pr-4 pl-4">
                                        <label for="password">Password</label>
                                        <input type="password" className="form-control" placeholder="Type Your Password"></input>
                                    </div>
                                    <div className="row mt-4 pr-4 pl-4">
                                        <button type="submit" className="btn btn-primary btn-block btn-md">Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;