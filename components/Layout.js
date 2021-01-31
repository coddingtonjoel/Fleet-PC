import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Seo from "./Seo";

const Layout = props => {
    return (
        <React.Fragment>
            <Seo />
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
