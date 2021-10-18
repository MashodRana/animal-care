import React from "react";
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h6>Business Hours</h6>
                        <p>Monday: 7:30am – 5:30pm</p>
                        <p>Tuesday: 7:30am – 5:30pm</p>
                        <p>Wednesday: 7:30am – 5:30pm</p>
                        <p>Thursday: 7:30am – 5:30pm</p>
                        <p>Friday: 7:30am – 5:30pm</p>
                        <p>Saturday: 8:30am – 4:30pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="col">
                        <div>
                            <p><i class="fas fa-map-marker-alt"></i></p>
                            <h6>Animal Care</h6>
                            <p>House-45, Lane-6, Block-E, Section-2 Mirpur, Dhaka-1215</p>
                        </div>
                        <div>
                            <p><i class="fas fa-phone"></i></p>
                            <p>01775 64 69 95</p>
                        </div>
                        <div>
                            <p><i class="fas fa-envelope"></i></p>
                            <p>animal.care@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        
                            <div class="row">
                                <h1>contact us</h1>
                            </div>
                            <div class="row">
                                <h4 style={{textAlign:'center'}}>We'd love to hear from you!</h4>
                            </div>
                            <div class="row input-container">
                                <div class="col-xs-12">
                                    <div class="styled-input wide">
                                        <input type="text" required />
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="styled-input">
                                        <input type="text" required />
                                        <label>Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="styled-input" style={{float:'right'}}>
                                        <input type="text" required />
                                        <label>Phone Number</label>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="styled-input wide">
                                        <textarea required></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="btn-lrg submit-btn">Send Message</div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;