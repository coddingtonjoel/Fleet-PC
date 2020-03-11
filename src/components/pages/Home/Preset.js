import React from "react";

const Preset = (props) => {
    return (
        <div className="preset card-panel grey darken-3">
            <img className="preset-img" src={props.img} alt="" />
            <p className="preset-title white-text">{props.title}</p>
            <p className="preset-subtitle grey-text center">{props.subtitle}</p>
        </div>
    );
};

export default Preset;
