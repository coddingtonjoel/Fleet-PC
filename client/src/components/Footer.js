import React from "react";

const Footer = () => {
    return (
        <footer className="footer page-footer">
            <div className="container">
                <div className="footer-row row">
                    <div className="col l6 s12">
                        <h4 className="footer-head">FLEET PC</h4>
                        <p className="footer-copyright-text">
                            © 2020 Joel Coddington
                        </p>
                    </div>
                    <div className="center footer-link-container col l6 s12">
                        <a
                            href="https://www.linkedin.com/in/joel-coddington/"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light"
                            target="__blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/coddingtonjoel"
                            className="footer-link-icon z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light"
                            target="__blank"
                            rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="#!"
                            className="footer-link z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light">
                            Contact
                        </a>
                        <a
                            href="#!"
                            className="footer-link z-depth-0 btn white-text grey center darken-4 white-text waves-effect waves-light">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
