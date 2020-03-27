import React, { useEffect, useState, Fragment } from "react";
import M from "materialize-css";

const Peripheral = (props) => {
    //init materialize-css modal
    useEffect(() => {
        M.AutoInit();
    }, []);

    const [text, setText] = useState("");

    const handler = () => {
        props.handler(text);
    };

    const textHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <Fragment>
            {/* Add Button */}
            <button
                data-target={props.name}
                className="peripheral modal-trigger btn waves-effect z-depth-2 white black-text">
                <i className="material-icons left">add</i>
                Add {props.name}
            </button>
            {/* Modal for Other*/}
            <div id="Other" className="modal">
                <div className="modal-content">
                    <h4 className="modal-title">Add Other</h4>
                    <div className="input-field peripheral-other-input">
                        <input
                            value={text}
                            onChange={textHandler}
                            className="validate"
                            placeholder="Other Part (Provide Details)"
                            id="first_name"
                            type="text"
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <a
                        onClick={handler}
                        disabled={!text}
                        href="#!"
                        className="modal-close modal-add waves-effect waves-light btn green white-text">
                        Add
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default Peripheral;
