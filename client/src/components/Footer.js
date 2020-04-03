import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer page-footer">
            <div className="container">
                <div className="footer-row">
                    <div>
                        <h4 className="footer-head center">FLEET PC</h4>
                        <p className="footer-copyright-text center">
                            © 2020 Joel Coddington
                        </p>
                    </div>
                    <div className="center footer-link-container">
                        <a
                            href="https://www.linkedin.com/in/joel-coddington/"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light"
                            target="__blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-linkedin">
                                &nbsp;&nbsp;&nbsp;
                            </i>
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/coddingtonjoel"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light"
                            target="__blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-github">&nbsp;&nbsp;&nbsp;</i>
                            GitHub
                        </a>
                        <Link
                            to="/contact"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light">
                            Contact
                        </Link>
                        <Link
                            to="/about"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
