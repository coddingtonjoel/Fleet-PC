import React from "react";

const Hook = () => {
    return (
        <body className="hook">
            <div className="hook-container">
                <div className="hook-inner-container container">
                    <h2 className="hook-head">Don't get overcharged.</h2>
                    <h5 className="hook-body">
                        Bigger companies overprice builds and upgrades.
                        <br />
                        Fleet PC doesn't, and even gives you personalized
                        service.
                    </h5>
                    <div className="hook-btn-container">
                        <a href="/build" className="hook-btn build">
                            <p>Build a PC</p>
                        </a>
                        <a href="/upgrade" className="hook-btn upgrade">
                            <p>Upgrade a PC</p>
                        </a>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Hook;
