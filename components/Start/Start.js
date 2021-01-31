import React from "react";

const Start = () => {
    return (
        <div className="start">
            <a
                href="/build"
                className="start-link btn z-depth-3 waves-effect waves-light">
                <div className="start-btn waves-effect">
                    <p className="valign-wrapper">Build a PC</p>
                </div>
            </a>
            <a
                href="/upgrade"
                className="start-link start-link-upgrade btn z-depth-3 waves-effect waves-light">
                <div className="start-btn waves-effect">
                    <p className="valign-wrapper">Upgrade a PC</p>
                </div>
            </a>
        </div>
    );
};

export default Start;
