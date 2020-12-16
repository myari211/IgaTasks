import React, { Component } from 'react';

class Validation extends Component {
    render(){
        return(
            <div className="container">
                <div className="row mt-long d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row mt-4 d-flex justify-content-center">
                                    <h4>Validation</h4>
                                </div>
                                <div className="row mt-4 pl-4 pr-4">
                                    <label for="full_name">Full Name</label>
                                    <input type="text" className="form-control" id="fullname"></input>
                                </div>
                                <div className="row mt-4 pl-4 pr-4">
                                    <label for="address">Address</label>
                                    <input type="text" className="form-control" id="address"></input>
                                </div>
                                <div className="row mt-4 pl-4 pr-4">
                                    <label for="phone">Phone</label>
                                    <input type="number" className="form-control" id="number"></input>
                                </div>
                                <div className="row mt-4 pl-4 pr-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-md">Submit</button>
                                </div>
                                <div className="row mt-2 pl-4 pr-4">
                                    <button type="button" className="btn btn-danger btn-block btn-md">Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Validation;