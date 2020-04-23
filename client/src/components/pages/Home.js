import React, { Fragment } from "react";
import Header from "./Home/Header";
import Hook from "./Home/Hook";
import PresetsContainer from "./Home/PresetsContainer";

const Home = (props) => {
    return (
        <Fragment>
            <Header />
            <Hook />
            <PresetsContainer />
        </Fragment>
    );
};

export default Home;
