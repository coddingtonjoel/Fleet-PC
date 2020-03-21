import React, { useEffect, Fragment } from "react";
import M from "materialize-css";
import ModalContent from "./ModalContent";

const Peripheral = (props) => {
    //init materialize-css modal
    useEffect(() => {
        M.AutoInit();
    }, []);

    const handler = (item) => {
        props.handler(item);
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
            {/* Modal for Monitor, Keyboard, Headset*/}
            <div id={props.name} className="peripheral-modal modal">
                <div className="modal-content">
                    <h4 className="modal-title">Add {props.name}</h4>
                    <ModalContent type={props.name} handler={handler} />
                </div>
            </div>
            {/* Modal for Other*/}
            <div id="Other" className="peripheral-modal modal">
                <div className="modal-content">
                    <h4 className="modal-title">Add Other</h4>
                    <form>
                        <div className="input-field peripheral-other-input">
                            <input
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
                        onClick={props.handler}
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
