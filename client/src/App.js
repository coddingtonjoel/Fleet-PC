import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Build from "./components/pages/Build";
import Builds from "./Builds";
import Start from "./components/pages/Start/Start";
import Submitted from "./components/pages/Submitted/Submitted";

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
                    <Route exact path="/start" render={(props) => <Start />} />
                    <Route
                        exact
                        path="/submitted"
                        render={(props) => <Submitted />}
                    />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
