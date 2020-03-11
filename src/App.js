import React from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Header from "./components/pages/Home/Header";
import Hook from "./components/pages/Home/Hook";
import PresetsContainer from "./components/pages/Home/PresetsContainer";

function App() {
    return (
        <div className="complete-page">
            <Navbar />
            <Header />
            <Hook />
            <PresetsContainer />
        </div>
    );
}

export default App;
