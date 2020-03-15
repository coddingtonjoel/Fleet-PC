import React from "react";
import BuildHeader from "./Build/BuildHeader";
import BuildContainer from "./Build/BuildContainer";

const Build = (props) => {
    return (
        <div>
            <BuildHeader build={props.build} />
            <BuildContainer build={props.build} />
        </div>
    );
};

export default Build;
