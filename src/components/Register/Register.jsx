import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const { registerWithEmailPassword } = useFirebase();
    const history = useHistory();
    const handleRegistration = (evnt) => {
        evnt.preventDefault();
        registerWithEmailPassword(userName, userEmail, userPassword);
        history.push('/home');

    }

    const handleNameInput = (evnt) => {
        setUserName(evnt.target.value);
    }

    const handleUserEmailInput = (evnt) => {
        setUserEmail(evnt.target.value);
        console.log(userEmail);
    }

    const handleUserPasswordInput = (evnt) => {
        setPassword(evnt.target.value);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                                <form onSubmit={handleRegistration}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="Mashod Rana"
                                            onChange={handleNameInput}
                                            value={userName}
                                        />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            onChange={handleUserEmailInput}
                                            value={userEmail}
                                        />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            onChange={handleUserPasswordInput}
                                            value={userPassword}
                                        />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    {/* <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label className="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div> */}
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit"

                                        >Sign in</button>
                                    </div>
                                </form>
                                
                                {/* <div className="d-grid">
                                    <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="button">
                                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                    </button>
                                </div> */}
                                <p>Already an user? <Link to="/login">Login here</Link> </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;