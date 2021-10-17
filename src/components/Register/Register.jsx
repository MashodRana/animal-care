import React, { useState } from "react";

const Register = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = (evnt) => {
        evnt.preventDefault();
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <form onSubmit={handleRegistration}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            name="email"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="passowrd"
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;