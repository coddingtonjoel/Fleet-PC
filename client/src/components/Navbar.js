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
            <nav className="navbar grey darken-4">
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
                                href="/build">
                                Build
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-flat waves-effect waves-light white-text navtext"
                                href="/upgrade">
                                Upgrade
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-flat waves-effect waves-light white-text navtext"
                                href="/contact">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-flat waves-effect waves-light white-text navtext"
                                href="/about">
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
                        href="/build">
                        Build
                    </a>
                </li>
                <li>
                    <a
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        href="/upgrade">
                        Upgrade
                    </a>
                </li>
                <li>
                    <a
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        href="/contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                        href="/about">
                        About
                    </a>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navbar;
