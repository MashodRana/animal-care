import React from "react";
import { Link } from "react-router-dom";

const Login = ()=>{
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

                <p>Are you new? <Link to="/register">Register here</Link> </p>
            </div>
        </div>
    );
};

export default Login;