import React from "react";

const Submitted = () => {
    return (
        <div className="submitted">
            <h1 className="submitted-main">
                <p>Thank You for Submitting a Request!</p>
                <p className="submitted-sub">
                    We will be in contact with you shortly.
                </p>
            </h1>
            <a
                href="/"
                className="submitted-btn btn-large waves-effect grey-text text-darken-4 white darken-3">
                Home
            </a>
        </div>
    );
};

export default Submitted;
