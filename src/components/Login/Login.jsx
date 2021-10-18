import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css"

const Login = () => {
    const history  = useHistory();
    const { user, signInUsingGoogle, signInUsingEmailPassword } = useFirebase();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleSignIn = (evnt) => {
        evnt.preventDefault();
        signInUsingEmailPassword(userEmail, userPassword);
        history.push('/home');
    }

    const handleUserEmailInput = (evnt) => {
        setUserEmail(evnt.target.value);
    }
    const handleUserPasswordInput = (evnt) => {
        setUserPassword(evnt.target.value);
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card border-0 shadow rounded-3 my-5">
                            <div class="card-body p-4 p-sm-5">
                                <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                                <form onSubmit={handleSignIn}>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            onChange={handleUserEmailInput}
                                            value={userEmail}
                                        />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            onChange={handleUserPasswordInput}
                                            value={userPassword}
                                        />
                                        <label for="floatingPassword">Password</label>
                                    </div>

                                    {/* <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                        <label class="form-check-label" for="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div> */}
                                    <div class="d-grid">
                                        <button
                                            class="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit"

                                        >Sign in</button>
                                    </div>
                                </form>
                                <hr class="my-4" />
                                <div class="d-grid mb-2">
                                    <button class="btn btn-google btn-login text-uppercase fw-bold" type="button" onClick={signInUsingGoogle}>
                                        <i class="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                                {/* <div class="d-grid">
                                    <button class="btn btn-facebook btn-login text-uppercase fw-bold" type="button">
                                        <i class="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                    </button>
                                </div> */}
                                <p>Are you new? <Link to="/register">Register here</Link> </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;