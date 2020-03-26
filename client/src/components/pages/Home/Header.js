import React from "react";

const Header = () => {
    return (
        <main className="header-container">
            <div className="header-main">
                <h1 className="bold">
                    Locally-based PC builds and upgrades
                    <br />
                    tailored to your every need.
                </h1>
                <p className="build-header-sub">Based in Southern California</p>
            </div>
            <a
                href="/start"
                className="header-btn btn-large waves-effect grey-text text-darken-4 white darken-3">
                Start Now
            </a>
        </main>
    );
};

export default Header;
