import React from "react";
import { Link } from "react-router-dom";

const Hook = () => {
    return (
        <div className="hook">
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
                        <Link to="/build" className="hook-btn build">
                            <p>Build a PC</p>
                        </Link>
                        <Link to="/upgrade" className="hook-btn upgrade">
                            <p>Upgrade a PC</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hook;
