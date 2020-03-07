import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-main">
                Locally-based PC builds and upgrades
                <br />
                tailored to your every need.
            </h1>
            <a
                href="#!"
                className="header-btn btn-large waves-effect waves-dark grey-text text-darken-4 white darken-3">
                Start Now
            </a>
        </div>
    );
};

export default Header;
