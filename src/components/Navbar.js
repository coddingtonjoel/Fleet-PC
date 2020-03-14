import React, { Fragment, useEffect } from "react";
import M from "materialize-css";
import logo from "../images/Logo@2x.png";

const Navbar = () => {
    //init materialize-css sidenav
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <Fragment>
            <nav className="grey darken-4">
                <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">
                        <img className="nav-logo" src={logo} alt="logo" />
                    </a>
                    <a
                        href="#!"
                        data-target="mobile-sidenav"
                        className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a
                                className="btn-flat waves-effect waves-light white-text navtext"
                                href="#!">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-flat waves-effect waves-light white-text navtext"
                                href="#!">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav grey darken-4" id="mobile-sidenav">
                <li>
                    <a
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        href="#!">
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        href="#!">
                        About
                    </a>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navbar;
