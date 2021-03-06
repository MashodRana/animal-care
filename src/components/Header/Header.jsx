import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css"


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between">
          <span>
            <NavLink className="navbar-brand" to="/"><i class="fas fa-cat"></i>&nbsp;Animal Care</NavLink>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/appointment" className="nav-link">Appointment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/caretips" className="nav-link">Care Tips</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contactus" className="nav-link">Contact us</NavLink>
                </li>
                {user.email && <li className="nav-item"><span className="nav-link">Hello, {user.displayName}</span></li>}
                <li className="nav-item">
                  {user.email ?
                    <button className="btn btn-warning" onClick={logOut}>Log out</button>
                    :
                    <NavLink to="/login" className="nav-link">Login</NavLink>}
                </li>
              </ul>

            </div>
          </span>
          {/* <span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            </ul>
          </span> */}
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