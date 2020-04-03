import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Build from "./components/pages/Build";
import Builds from "./Builds";
import Start from "./components/pages/Start/Start";
import Submitted from "./components/pages/Submitted/Submitted";
import StartBuild from "./components/pages/Start/StartBuild";
import StartUpgrade from "./components/pages/Start/StartUpgrade";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import page404 from "./components/pages/404";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
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
                    <Route exact path="/start" component={Start} />
                    <Route exact path="/build" component={StartBuild} />
                    <Route exact path="/upgrade" component={StartUpgrade} />
                    <Route exact path="/submitted" component={Submitted} />
                    />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={page404} />
                </Switch>
                <Footer />
            </Fragment>
        </Router>
    );
}

export default App;
