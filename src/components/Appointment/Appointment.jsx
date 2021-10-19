import React from 'react'
import './Appointment.css'

const Appointment = () => {
    return (
        <div>
            <div className="appointment-section my-5">
                <div className="container">
                    <div>
                        <h2>Make an Appointment</h2>
                        <p>We are happy to book an appointment for you. This is not an automatic process. Once we receive your request, we will contact you to confirm a date and time that is as close to your request as possible.</p>
                        <p>
                            This form should only be used for requesting appointments that will take place at least 2 full business days after the time of the submission of this form.
                        </p>
                        <h6>This form is NOT for same day appointment / Urgent care appointment requests.</h6>
                        <p>If your appointment has not been confirmed within 24 hours, please feel free to contact the practice by phone to confirm.
                        </p>
                    </div>
                    <div>
                        <form >
                            <div class="input-group">
                                <span class="input-group-text">First and last name</span>
                                <input type="text" aria-label="First name" class="form-control" />
                                <input type="text" aria-label="Last name" class="form-control" />
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Email</span>
                                <input required type="email" aria-label="First name" class="form-control" />

                            </div>

                            <div class="input-group">
                                <span class="input-group-text">Phone</span>
                                <input required type="number" aria-label="First name" class="form-control" />

                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Pet Name</span>
                                <input required type="text" aria-label="First name" class="form-control" />

                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Prefered Date</span>
                                <input required type="date" aria-label="First name" class="form-control" />

                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Reason for appointment</span>
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>

                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;