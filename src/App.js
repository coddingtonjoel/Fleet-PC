import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Build from "./components/pages/Build";
import Builds from "./Builds";

function App() {
    return (
        <Router>
            <div className="complete-page">
                <Navbar />
                <Switch>
                    <Route exact path="/" render={(props) => <Home />} />
                    {Builds.map((build) => {
                        return (
                            <Route
                                exact
                                path={`/${build.title}`}
                                key={build.title}
                                render={(props) => <Build build={build} />}
                            />
                        );
                    })}
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
