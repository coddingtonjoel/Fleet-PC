import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <h2 className="contact-head">Contact Us</h2>
            <div className="contact-container">
                <p className="contact-body center">
                    For business inquiries, feel free to email us at
                    <span className="bold contact-body-email">
                        {" "}
                        admin@fleetpc.org
                    </span>
                    <br />
                    <br />
                    Don't hesitate to leave us any suggestions either!
                </p>
            </div>
            <div> &nbsp;</div>
        </div>
    );
};

export default Contact;
