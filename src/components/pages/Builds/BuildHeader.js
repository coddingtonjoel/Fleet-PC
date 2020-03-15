import React from "react";

const BuildHeader = (props) => {
    return (
        <div className="build-header">
            <h1 className="build-header-main">
                <p>{props.build.title}</p>
                <p className="build-header-sub">{props.build.subtitle}</p>
            </h1>
        </div>
    );
};

export default BuildHeader;
