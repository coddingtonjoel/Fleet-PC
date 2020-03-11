import React from "react";
import Preset from "./Preset";
import one from "../../../images/one.png";
import two from "../../../images/two.png";
import three from "../../../images/three.png";
import four from "../../../images/four.png";

const PresetsContainer = () => {
    return (
        <div className="presets">
            <div>
                <h2 className="presets-head">
                    Select from curated PC presets.
                </h2>
                <div className="presets-container">
                    {preset.map((build) => {
                        return (
                            <Preset
                                title={build.title}
                                img={build.img}
                                subtitle={build.subtitle}
                                key={build.title}
                            />
                        );
                    })}
                    <a
                        href="#!"
                        className="presets-container-btn btn grey darken-4">
                        <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

const preset = [
    {
        title: "Galleon",
        img: one,
        subtitle: "Business Desktop"
    },
    {
        title: "Submarine",
        img: two,
        subtitle: "High Performance Desktop"
    },
    {
        title: "Battleship",
        img: three,
        subtitle: "High-Tier Gaming Desktop"
    },
    {
        title: "Barque",
        img: four,
        subtitle: "Affordable Gaming Desktop"
    }
];
export default PresetsContainer;
