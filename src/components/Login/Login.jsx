import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = ()=>{
    const {user, signInUsingGoogle} = useFirebase();
    return (
        <div>
            <div>
                <h2>Please Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="submit" />
                    
                </form>
                <div>----------------or--------------</div>
                <div>
                    <button 
                    className="btn btn-primary"
                    onClick={signInUsingGoogle}
                    >Google SignIn</button>
                </div>

                <p>Are you new? <Link to="/register">Register here</Link> </p>
            </div>
        </div>
    );
};

export default Login;