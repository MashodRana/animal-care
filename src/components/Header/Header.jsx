import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = ()=>{
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/login">Login</Link>

        </div>
    );
};

export default Header;