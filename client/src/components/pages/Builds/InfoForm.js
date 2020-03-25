import React, { useState } from "react";

const InfoForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [submit, setSubmit] = useState("Submit Build Request");

    //send post request to nodemailer
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(
            <div class="btn-spinner preloader-wrapper small active">
                <div class="spinner-layer spinner-red-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        );
        fetch("https://fleet-pc.herokuapp.com/send", {
            //fetch("http://localhost:5000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                user: {
                    type: "build",
                    first: first,
                    last: last,
                    email: email,
                    street: street,
                    city: city,
                    state: state,
                    zipcode: zipcode,
                    build: props.build,
                    other: props.other
                }
            })
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((json) => console.log(json))
            .catch((a) => {
                console.log("Email Send Attempted . . .");
                window.location.href = "/submitted";
            });
    };

    return (
        <form
            className="infoform"
            name="build-request"
            onSubmit={handleSubmit}
            action="/submitted">
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
                            className="validate infoform-input"
                            name="first"
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
                            className="validate infoform-input"
                            name="last"
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
                            className="validate infoform-input"
                            name="email"
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
                            className="validate infoform-input"
                            name="street"
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
                            className="validate infoform-input"
                            name="city"
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
                            className="validate infoform-input"
                            name="state"
                            required
                        />
                        <label htmlFor="state">State</label>
                    </div>
                    <div className="input-field col s4">
                        <input
                            onChange={(e) => {
                                setZipcode(e.target.value);
                            }}
                            id="zipcode"
                            type="text"
                            className="validate infoform-input"
                            name="zipcode"
                            required
                        />
                        <label htmlFor="zipcode">Zipcode</label>
                    </div>
                </div>
            </div>
            <div className="build-container-submit-container">
                <button
                    className="btn waves-effect waves-light grey darken-4 build-container-submit right"
                    type="submit">
                    {submit}
                </button>
            </div>
        </form>
    );
};

export default InfoForm;
