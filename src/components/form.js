import React, { Component } from 'react';

class Form extends Component {
    render(){
        return(
            <div className="container">
                <div className="row mt-long d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row d-flex justify-content-center">
                                    <h4>Form</h4>
                                </div>
                                <div className="row mt-2 pl-4 pr-4">
                                    <label for="name">Full Name</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="row mt-2 pl-4 pr-4">
                                    <label for="address">Address</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="row mt-2 pl-4 pr-4">
                                    <label for="phone">Phone Number</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="row mt-2 pl-4 pr-4">
                                    <label for="upload">Photo</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="row mt-2 pl-4 pr-4">
                                    <button type="button" className="btn btn-primary btn-md btn-block">
                                        Submit
                                    </button>
                                    <button type="reset" className="btn btn-danger btn-md btn-block">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;