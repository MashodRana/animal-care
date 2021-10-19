import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="custom-footer w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">Animal Care</h5>
                            <p className="small text-muted">An animal clinic. We ensure your safety and careful treatment for pet. </p>

                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/contactus">Contact us</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">Follow Us</h5>
                            <ul className="list-unstyled text-muted social-links">
                                <p>
                                    <span><Link><i class="fab fa-facebook"></i></Link></span>
                                    <span><Link><i class="fab fa-twitter"></i></Link></span>
                                    <span><Link><i class="fab fa-instagram"></i></Link></span>
                                </p>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Subscribe us to get lates offer and news.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="small text-muted mb-0">2021 &copy; Copyrights. All rights reserved by Animal Care.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;