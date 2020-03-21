import React, { useEffect, useState, Fragment } from "react";
import M from "materialize-css";

const Peripheral = (props) => {
    //init materialize-css modal
    useEffect(() => {
        M.AutoInit();
    }, []);

    const [other, setOther] = useState(0);

    const handler = () => {
        props.handler(other);
    };

    const textHandler = (e) => {
        setOther(e.target.value);
    };

    return (
        <Fragment>
            {/* Add Button */}
            <button
                data-target={props.name}
                className="peripheral modal-trigger btn waves-effect white black-text">
                <i className="material-icons left">add</i>
                Add {props.name}
            </button>
            {/* Modal for Other*/}
            <div id="Other" className="modal">
                <div className="modal-content">
                    <h4 className="modal-title">Add Other</h4>
                    <form>
                        <div className="input-field peripheral-other-input">
                            <input
                                onChange={textHandler}
                                className="validate"
                                placeholder="Other Peripheral"
                                id="first_name"
                                type="text"
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <a
                        onClick={handler}
                        href="#!"
                        className="modal-close waves-effect btn-flat">
                        Add
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default Peripheral;
