import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-main">
                <h1 className="bold header-main-text">
                    Locally-based PC builds and upgrades
                    <br />
                    tailored to your every need.
                </h1>
                <p className="header-main-sub">Based in Southern California</p>
            </div>
            <Link
                to="/start"
                className="header-btn btn-large waves-effect grey-text text-darken-4 white darken-3">
                Start Now
            </Link>
        </div>
    );
};

export default Header;
