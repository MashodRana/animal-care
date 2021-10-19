import React from 'react'
import './Appointment.css'

const Appointment = () => {
    return (
        <div>
            <div className="appointment-section my-5">
                <div className="container">
                    <div>
                        <h2>Make an <span className="custom-color-1">Appointment</span></h2>
                        <br />
                        <p>We are happy to book an appointment for you. This is not an automatic process. Once we receive your request, we will contact you to confirm a date and time that is as close to your request as possible.</p>
                        <p>
                            This form should only be used for requesting appointments that will take place at least 2 full business days after the time of the submission of this form.
                        </p>
                        <h6>This form is NOT for same day appointment / Urgent care appointment requests.</h6>
                        <p>If your appointment has not been confirmed within 24 hours, please feel free to contact the practice by phone to confirm.
                        </p>
                    </div>
                    <div className="row my-5">
                        <div className="appointment-form col-md-6 col-sm-10 col-12 mx-auto px-lg-5 py-lg-5 px-2 py-3">
                            <form >
                                <div class="mb-3">
                                    <label class="form-label">First Name</label>
                                    <input required type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Last Name</label>
                                    <input required type="text" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input required type="email" class="form-control" />

                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input required type="number" class="form-control" />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Pet Name</label>
                                    <input required type="text" class="form-control" />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Prefered Date</label>
                                    <input required type="date" class="form-control" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Reason for appointment</label>
                                    <textarea class="form-control" ></textarea>
                                </div>

                                <div className="text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;