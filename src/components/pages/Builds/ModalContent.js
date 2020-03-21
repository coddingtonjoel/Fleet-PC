import React from "react";
import BuildPeripherals from "./BuildPeripherals";

const ModalContent = (props) => {
    let monitor = null;
    let keyboard = null;
    let mouse = null;

    if (props.type === "Monitor") {
        monitor = BuildPeripherals.monitor.map((item) => {
            return (
                <div className="modal-item" key={item.title}>
                    <img className="modal-item-img" src={item.img} alt="" />
                    <br />
                    <p className="modal-item-title">{item.title}</p>
                    <p className="modal-item-sub">
                        {item.resolution}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $
                        {item.price}
                    </p>
                    <a
                        onClick={() => props.handler(item)}
                        href="#!"
                        className="modal-close btn waves-light waves-effect grey darken-3 white-text modal-item-add">
                        Add
                    </a>
                </div>
            );
        });
    }

    return (
        <div className="modalcontent">
            {monitor}
            {keyboard}
            {mouse}
        </div>
    );
};

export default ModalContent;
