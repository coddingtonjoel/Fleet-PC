import React, { Fragment } from "react";
import Preset from "./Preset";
import data from "../../builds.json";

const PresetsContainer = () => {
    return (
        <div className="presets">
            <div>
                <h2 className="presets-head">
                    Select from curated PC presets.
                </h2>
                <div className="presets-container">
                    {data.map(build => {
                        return (
                            <Fragment key={build.title}>
                                <Preset
                                    title={build.title}
                                    img={build.img}
                                    subtitle={build.subtitle}
                                    key={build.title}
                                />
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PresetsContainer;
