import React from "react";
import Header from "./Home/Header";
import Hook from "./Home/Hook";
import PresetsContainer from "./Home/PresetsContainer";

const Home = (props) => {
    return (
        <div>
            <Header />
            <Hook />
            <PresetsContainer />
        </div>
    );
};

export default Home;
