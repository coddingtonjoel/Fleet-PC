import React from "react";
import Header from "../components/Home/Header";
import Hook from "../components/Home/Hook";
import PresetsContainer from "../components/Home/PresetsContainer";

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Hook />
            <PresetsContainer />
        </React.Fragment>
    );
}