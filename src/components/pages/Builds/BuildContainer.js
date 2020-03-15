import React from "react";

const BuildContainer = (props) => {
    const formatCurrency = require("format-currency");
    const opts = { format: "%v", maxFraction: 2 };

    const subtotal =
        props.build.cpu.price +
        props.build.graphics.price +
        props.build.motherboard.price +
        props.build.memory.price +
        props.build.storage.price +
        props.build.case.price +
        props.build.power.price +
        props.build.cooler.price +
        props.build.os.price;

    const tax = subtotal * 0.095;

    const total = props.build.fee + subtotal + tax;

    return (
        <div className="build-container">
            <div className="container">
                <h2 className="build-container-specs-head">
                    Specifications and Prices
                </h2>
                <h5 className="center">
                    You won't have to guess where your money is going.
                </h5>
                <div className="build-container-specs-body">
                    <ul>
                        <li>
                            <span className="bold">CPU: </span>
                            {props.build.cpu.title}
                            <span className="right">
                                ${props.build.cpu.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Graphics: </span>
                            {props.build.graphics.title}
                            <span className="right">
                                ${props.build.graphics.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Motherboard: </span>
                            {props.build.motherboard.title}
                            <span className="right">
                                ${props.build.motherboard.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Memory: </span>
                            {props.build.memory.title}
                            <span className="right">
                                ${props.build.memory.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Storage: </span>
                            {props.build.storage.title}
                            <span className="right">
                                ${props.build.storage.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Case: </span>
                            {props.build.case.title}
                            <span className="right">
                                ${props.build.case.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Power Supply: </span>{" "}
                            {props.build.power.title}
                            <span className="right">
                                ${props.build.power.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">CPU Cooler: </span>
                            {props.build.cooler.title}
                            <span className="right">
                                ${props.build.cooler.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">OS: </span>{" "}
                            {props.build.os.title}
                            <span className="right">
                                ${props.build.os.price}
                            </span>
                        </li>
                        <hr />
                        <li>
                            <span className="bold">Subtotal: </span>
                            <span className="right">
                                ${formatCurrency(subtotal, opts)}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Tax: </span>
                            <span className="right">
                                ${formatCurrency(tax, opts)}
                            </span>
                        </li>
                        <hr />
                        <li>
                            <span className="bold">
                                Construction & Testing:{" "}
                            </span>
                            <span className="right">
                                ${props.build.fee.toPrecision(5)}
                            </span>
                        </li>
                        <hr />
                        <li className="right">
                            <span className="bold">Total: </span>
                            <span className="bold">
                                ${formatCurrency(total, opts)}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BuildContainer;
