import React, { Fragment, useState } from "react";
import Link from "next/link";
import Drawer from "@material-ui/core/Drawer";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });

    return (
        <Fragment>
            <nav className="navbar grey darken-4">
                <div className="nav-wrapper container">
                    <Link href="/" className="brand-logo">
                        <img
                            className="nav-logo"
                            src="/Logo@2x.png"
                            alt="logo"
                        />
                    </Link>
                    {isMobile ? (
                        <a
                            onClick={() => setIsOpen(true)}
                            className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                    ) : null}

                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link href="/build">
                                <a
                                    className="btn-flat waves-effect waves-light white-text navtext"
                                    href="/build">
                                    Build
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/upgrade">
                                <a
                                    className="btn-flat waves-effect waves-light white-text navtext"
                                    href="/upgrade">
                                    Upgrade
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a
                                    className="btn-flat waves-effect waves-light white-text navtext"
                                    href="/contact">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a
                                    className="btn-flat waves-effect waves-light white-text navtext"
                                    href="/about">
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Drawer
                className="nav-drawer"
                anchor={"left"}
                open={isOpen}
                onClick={() => setIsOpen(false)}
                onClose={() => {
                    setIsOpen(false);
                }}>
                <div className="grey darken-4">
                    <ul className="grey darken-4">
                        <li>
                            <Link href="/">
                                <img
                                    onClick={() => setIsOpen(false)}
                                    src="/Logo.png"
                                    alt="logo"
                                    className="nav-drawer-logo"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/build">
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                                    href="/build">
                                    Build
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/upgrade">
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                                    href="/upgrade">
                                    Upgrade
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a
                                    className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                                    href="/contact">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a
                                    className="sidenav-text grey darken-4 white-text waves-light waves-effect"
                                    href="/about">
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </Fragment>
    );
};

export default Navbar;
