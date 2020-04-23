import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div className="start">
            <Link
                to="/build"
                className="start-link btn z-depth-3 waves-effect waves-light">
                <div className="start-btn waves-effect">
                    <p className="valign-wrapper">Build a PC</p>
                </div>
            </Link>
            <Link
                to="/upgrade"
                className="start-link start-link-upgrade btn z-depth-3 waves-effect waves-light">
                <div className="start-btn waves-effect">
                    <p className="valign-wrapper">Upgrade a PC</p>
                </div>
            </Link>
        </div>
    );
};

export default Start;
