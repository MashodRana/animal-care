import React, { useState } from "react";
import { useHistory } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const {registerWithEmailPassword} = useFirebase();
    const history = useHistory();
    const handleRegistration = (evnt) => {
        evnt.preventDefault();
        registerWithEmailPassword(userName, userEmail, userPassword);
        history.push('/home');

    }

    const handleNameInput = (evnt)=>{
        setUserName(evnt.target.value);
    }

    const handleEmailInput = (evnt)=>{
        setUserEmail(evnt.target.value);
        console.log(userEmail);
    }

    const handlePasswordInput = (evnt)=>{
        setPassword(evnt.target.value);
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <form onSubmit={handleRegistration}>
                <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            onChange = {handleNameInput}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            onChange = {handleEmailInput}
                            value={userEmail}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="passowrd"
                            onChange = {handlePasswordInput}
                            value={userPassword}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;