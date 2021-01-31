import React from "react";
import Link from "next/link";

const Preset = props => {
    return (
        <div className="preset grey darken-3 z-depth-3">
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
                href={`/build/${props.title.toLowerCase()}`}
                className="preset-btn btn white black-text waves-effect">
                View
            </a>
        </div>
    );
};

export default Preset;
