import React from "react";
import Builds from "../../../Builds";

const Preset = (props) => {
    return (
        <div className="preset card-panel grey darken-3 z-depth-3">
            <div className="preset-blur">
                <img className="preset-img" src={props.img} alt="" />
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
