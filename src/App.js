import React from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Homeheader from "./components/pages/Homeheader";

function App() {
    return (
        <div className="complete-page">
            <Navbar />
            <Homeheader />
        </div>
    );
}

export default App;
