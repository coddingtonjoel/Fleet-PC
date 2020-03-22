import React, { useState } from "react";
import axios from "axios";

const InfoForm = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: {
                first: first,
                last: last,
                email: email,
                street: street,
                city: city,
                state: state,
                zipcode: zipcode
            }
        }).then((response) => {
            if (response.data.msg === "success") {
                alert("Message Sent.");
                this.resetForm();
            } else if (response.data.msg === "fail") {
                alert("Message failed to send.");
            }
        });
    };

    return (
        <div className="infoform">
            <h2 className="infoform-head center">Required Information</h2>
            <h5 className="infoform-sub center">
                So we can get in contact with you.
            </h5>
            <div className="infoform-container">
                <div className="row">
                    <div className="input-field col s12 m6">
                        <input
                            onChange={(e) => {
                                setFirst(e.target.value);
                            }}
                            id="first_name"
                            type="text"
                            className="validate"
                            required
                        />
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s12 m6">
                        <input
                            onChange={(e) => {
                                setLast(e.target.value);
                            }}
                            id="last_name"
                            type="text"
                            className="validate"
                            required
                        />
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            id="email"
                            type="email"
                            className="validate"
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            onChange={(e) => {
                                setStreet(e.target.value);
                            }}
                            id="street"
                            type="text"
                            className="validate"
                            required
                        />
                        <label htmlFor="street">Street Address</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                            id="city"
                            type="text"
                            className="validate"
                            required
                        />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field col s2">
                        <input
                            onChange={(e) => {
                                setState(e.target.value);
                            }}
                            id="state"
                            type="text"
                            className="validate"
                            required
                        />
                        <label htmlFor="state">State</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            onChange={(e) => {
                                setZipcode(e.target.value);
                            }}
                            id="zip"
                            type="text"
                            className="validate"
                            required
                        />
                        <label htmlFor="zip">Zipcode</label>
                    </div>
                </div>
            </div>
            <div className="build-container-submit-container">
                <button
                    onClick={submitForm}
                    className="btn waves-effect green build-container-submit right"
                    type="submit">
                    Submit Build Request
                </button>
            </div>
        </div>
    );
};

export default InfoForm;
