import React from "react";

const Footer = () => {
    return (
        <footer className="footer page-footer">
            <div className="container">
                <div className="footer-row">
                    <div>
                        <h4 className="footer-head center">FLEET PC</h4>
                        <p className="footer-copyright-text center">
                            © {new Date().getFullYear()} Joel Coddington
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
                        <a
                            href="/contact"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light">
                            Contact
                        </a>
                        <a
                            href="/about"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
