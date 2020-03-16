import React from "react";

const Preset = (props) => {
    return (
        <div className="preset card-panel grey darken-3 z-depth-3">
            <div className="preset-blur">
                <div className="preset-img-container">
                    <img className="preset-img" src={props.img} alt="" />
                </div>
                <p className="preset-title white-text">{props.title}</p>
                <p className="preset-subtitle grey-text center">
                    {props.subtitle}
                </p>
            </div>
            <a
                href={`/${props.title}`}
                className="preset-btn btn white black-text waves-effect">
                View
            </a>
        </div>
    );
};

export default Preset;
