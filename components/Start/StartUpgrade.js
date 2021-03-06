import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const StartUpgrade = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [select, setSelect] = useState("default");
    const [submit, setSubmit] = useState("Submit Request");

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
                    type: "upgrade",
                    select: select,
                    first: first,
                    last: last,
                    email: email,
                    street: street,
                    city: city,
                    state: state,
                    zipcode: zipcode
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
        <div className="start-upgrade">
            <div>
                <h2 className="presets-head">Upgrade an Existing PC.</h2>
                <div className="start-build-container">
                    <div className="start-upgrade-container start-build-container-bottom">
                        <div className="start-build-alt">
                            <h3 className="start-upgrade-head">
                                What part are you looking to upgrade?
                            </h3>
                            <p className="center start-upgrade-sub grey-text">
                                (Submit multiple requests if you are looking to
                                upgrade multiple parts)
                            </p>
                            <form
                                className="col s12"
                                onSubmit={handleSubmit}
                                action="/submitted">
                                <div className="row parts-selector grey darken-3">
                                    <FormControl style={styles}>
                                        <Select
                                            style={styles}
                                            className="start-upgrade-parts-selector"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={select}
                                            onChange={(e) => {
                                                setSelect(e.target.value);
                                                console.log(e.target.value);
                                            }}>
                                            <MenuItem
                                                style={menuItem}
                                                value={"default"}
                                                disabled
                                                default>
                                                Select a Part
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"Motherboard"}>
                                                Motherboard
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"CPU"}>
                                                CPU (Processor)
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"GPU"}>
                                                GPU (Graphics Card)
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"RAM"}>
                                                RAM (Memory)
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"Storage"}>
                                                Storage
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"PSU"}>
                                                PSU (Power Supply Unit)
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"CPU Cooler"}>
                                                CPU Cooler
                                            </MenuItem>
                                            <MenuItem
                                                style={menuItem}
                                                value={"Case"}>
                                                Case
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="infoform">
                                    <h2 className="infoform-head grey-text text-lighten-3 center">
                                        Required Information
                                    </h2>
                                    <h5 className="infoform-sub grey-text center">
                                        So we can get in contact with you.
                                    </h5>
                                    <div className="infoform-container">
                                        <div className="row">
                                            <div className="input-field text-field-white col s12 m6">
                                                <input
                                                    onChange={(e) => {
                                                        setFirst(
                                                            e.target.value
                                                        );
                                                    }}
                                                    id="first_name"
                                                    type="text"
                                                    className="validate"
                                                    name="first"
                                                    required
                                                />
                                                <label htmlFor="first_name">
                                                    First Name
                                                </label>
                                            </div>
                                            <div className="input-field text-field-white col s12 m6">
                                                <input
                                                    onChange={(e) => {
                                                        setLast(e.target.value);
                                                    }}
                                                    id="last_name"
                                                    type="text"
                                                    className="validate"
                                                    name="last"
                                                    required
                                                />
                                                <label htmlFor="last_name">
                                                    Last Name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field text-field-white col s12">
                                                <input
                                                    onChange={(e) => {
                                                        setEmail(
                                                            e.target.value
                                                        );
                                                    }}
                                                    id="email"
                                                    type="email"
                                                    className="validate"
                                                    name="email"
                                                    required
                                                />
                                                <label htmlFor="email">
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field text-field-white col s12">
                                                <input
                                                    onChange={(e) => {
                                                        setStreet(
                                                            e.target.value
                                                        );
                                                    }}
                                                    id="street"
                                                    type="text"
                                                    className="validate"
                                                    name="street"
                                                    required
                                                />
                                                <label htmlFor="street">
                                                    Street Address
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field text-field-white col s6">
                                                <input
                                                    onChange={(e) => {
                                                        setCity(e.target.value);
                                                    }}
                                                    id="city"
                                                    type="text"
                                                    className="validate"
                                                    name="city"
                                                    required
                                                />
                                                <label htmlFor="city">
                                                    City
                                                </label>
                                            </div>
                                            <div className="input-field text-field-white col s2">
                                                <input
                                                    onChange={(e) => {
                                                        setState(
                                                            e.target.value
                                                        );
                                                    }}
                                                    id="state"
                                                    type="text"
                                                    className="validate"
                                                    name="state"
                                                    required
                                                />
                                                <label htmlFor="state">
                                                    State
                                                </label>
                                            </div>
                                            <div className="input-field text-field-white col s4">
                                                <input
                                                    onChange={(e) => {
                                                        setZipcode(
                                                            e.target.value
                                                        );
                                                    }}
                                                    id="zipcode"
                                                    type="text"
                                                    className="validate"
                                                    name="zipcode"
                                                    required
                                                />
                                                <label htmlFor="zipcode">
                                                    Zipcode
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="start-upgrade-container-submit-container center">
                                        <button
                                            className="btn waves-effect waves-light grey darken-3 start-upgrade-submit"
                                            type="submit">
                                            {submit}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div> &nbsp;</div>
        </div>
    );
};

const styles = {
    color: "white",
    fontFamily: "'Chakra Petch', Sans Serif",
    width: "100%",
    fontSize: "1.8rem",
    height: "5rem"
};

const menuItem = {
    fontSize: "1.6rem",
    fontFamily: "'Chakra Petch', Sans Serif"
};

export default StartUpgrade;
