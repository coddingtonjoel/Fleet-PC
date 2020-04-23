import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import logo from "../images/Logo@2x.png";

const Navbar = () => {
    //init materialize-css sidenav
    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <Fragment>
            <nav className="navbar grey darken-4">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">
                        <img className="nav-logo" src={logo} alt="logo" />
                    </Link>
                    <a
                        href="#!"
                        data-target="mobile-sidenav"
                        className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link
                                className="btn-flat waves-effect waves-light white-text navtext"
                                to="/build">
                                Build
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn-flat waves-effect waves-light white-text navtext"
                                to="/upgrade">
                                Upgrade
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn-flat waves-effect waves-light white-text navtext"
                                to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn-flat waves-effect waves-light white-text navtext"
                                to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav grey darken-4" id="mobile-sidenav">
                <li>
                    <Link
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        to="/build">
                        Build
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        to="/upgrade">
                        Upgrade
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navbar;
