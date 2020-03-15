import React from "react";
import BuildHeader from "./Builds/BuildHeader";
import BuildContainer from "./Builds/BuildContainer";

const Build = (props) => {
    return (
        <div>
            <BuildHeader build={props.build} />
            <BuildContainer build={props.build} />
        </div>
    );
};

export default Build;
