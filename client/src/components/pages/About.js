import React from "react";

const About = () => {
    return (
        <div className="about">
            <h2 className="about-head">About Fleet PC</h2>
            <div className="about-container">
                <p className="about-body">
                    Here's how this all works. First, you'll submit a request,
                    which will be reviewed. Afterwards, you will be contacted to
                    confirm information about your request, and finally you will
                    be sent an invoice through Square via email. You'll have 7
                    days to pay the invoice, and once paid, the PC parts will be
                    ordered and the process of shipment will begin. Windows 10
                    will come preinstalled, along with necessary drivers.
                    <br />
                    <br />
                    Aside from business banter, hey! My name is Joel Coddington
                    and I've always been fascinated by computers. I am a
                    computer science student at Biola University in La Mirada,
                    CA; I built my first computer in 2017, and have build many
                    for friends and family since then. I wanted to keep up
                    building, but I didn't have anyone to build for! That's why
                    I decided to start a small business for local PC builds.
                    <br />
                    <br />
                    My biggest problem with big companies that sell PCs is that
                    you never know where you money is going. You are never sure
                    how much of your money is <em>actually</em> going to the
                    parts rather than to the manufacturer. Fleet PC uses Newegg
                    for consistent retail prices and suppliers. With the display
                    of prices on my custom presets, I want my customers to be
                    fully aware of exactly how their money is divided. Some
                    manufacturers could take hundreds of dollars in profit and
                    you won't even know it. I think being honest is the best way
                    to fulfill needs of customers and to properly give back to
                    the community.
                    <br />
                    <br />I also love web development! I built this website
                    using React, Sass, Materialize-CSS, Material-UI, and
                    Node.js. You can check out my other projects on GitHub, or
                    take a look at my LinkedIn profile!
                </p>
                <div className="about-btn-container">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/coddingtonjoel"
                        className="btn-large about-btn waves-effect waves-light white-text grey darken-2">
                        <i className="fab fa-github">&nbsp;&nbsp;&nbsp;</i>
                        GitHub
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/joel-coddington/"
                        className="btn-large about-btn waves-effect waves-light white-text grey darken-2">
                        <i className="fab fa-linkedin">&nbsp;&nbsp;&nbsp;</i>
                        LinkedIn
                    </a>
                </div>
            </div>
            <div> &nbsp;</div>
        </div>
    );
};

export default About;
