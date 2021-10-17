import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css"
const Header = ()=>{
    const {user, logOut} = useFirebase();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/aboutus">About Us</Link>
            
            {user.email && <span>Hello, {user.displayName}</span> }
            {
                user.email? <button className="btn btn-warning" onClick={logOut}>Log out</button>
                :
                <Link to="/login">Login</Link>
            }

        </div>
    );
};

export default Header;