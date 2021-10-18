import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css"
const Header = ()=>{
    const {user, logOut} = useFirebase();
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </>
        // <div className="header">
        //     <Link to="/home">Home</Link>
        //     <Link to="/services">Services</Link>
        //     <Link to="/aboutus">About Us</Link>
            
        //     {user.email && <span>Hello, {user.displayName}</span> }
        //     {
        //         user.email? <button className="btn btn-warning" onClick={logOut}>Log out</button>
        //         :
        //         <Link to="/login">Login</Link>
        //     }

        // </div>
    );
};

export default Header;