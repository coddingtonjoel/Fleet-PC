import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    const routeComponents = routes.map(({ path, component }, key) => (
        <Route exact path={path} component={component} key={key} />
    ));

    return (
        <Router>
            <div className="complete-page">
                <Navbar />
                <Switch>{routeComponents}</Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
