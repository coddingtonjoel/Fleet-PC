import React from "react";
import Overview from "./Overview";

const BuildContainer = (props) => {
    let adapter = null;

    //setting up addition for Wifi Adapters if needed based on motherboard
    if (
        props.build.title === "Barque" ||
        props.build.title === "Clipper" ||
        props.build.title === "Cruiser" ||
        props.build.title === "Tartane"
    ) {
        adapter = (
            <li>
                <span className="bold">Wifi Adapter: </span>
                {props.build.adapter.title}
                <span className="right">${props.build.adapter.price}</span>
            </li>
        );
    }

    //format prices to have correct decimal precision
    const formatCurrency = require("format-currency");
    const opts = { format: "%v", maxFraction: 2 };

    //make a local copy of build object so that user can make changes if necessary
    const local = JSON.parse(JSON.stringify(props));

    //construction and testing fee
    const fee = 120;

    //calculate subtotal using the local object's JSON properties
    const subtotal =
        local.build.cpu.price +
        local.build.graphics.price +
        local.build.motherboard.price +
        local.build.memory.price +
        local.build.storage.price +
        local.build.case.price +
        local.build.power.price +
        local.build.cooler.price +
        local.build.os.price +
        local.build.adapter.price;

    const tax = subtotal * 0.095;

    const total = fee + subtotal + tax;

    return (
        <div className="build-container">
            <div className="container">
                <div className="build-container-overview">
                    <h2 className="build-container-head center">Overview</h2>
                    <Overview build={props.build} />
                </div>
                <hr />
                <br />
                <div className="build-container-specs">
                    <h2 className="build-container-head">
                        Specifications and Prices
                    </h2>
                    <h5 className="center">
                        You won't have to guess where your money is going.
                    </h5>
                </div>
                <div className="build-container-specs-body">
                    <ul>
                        <li>
                            <span className="bold">CPU: </span>
                            {local.build.cpu.title}
                            <span className="right">
                                ${local.build.cpu.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Graphics: </span>
                            {local.build.graphics.title}
                            <span className="right">
                                ${local.build.graphics.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Motherboard: </span>
                            {local.build.motherboard.title}
                            <span className="right">
                                ${local.build.motherboard.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Memory: </span>
                            {local.build.memory.title}
                            <span className="right">
                                ${local.build.memory.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Storage: </span>
                            {local.build.storage.title}
                            <span className="right">
                                ${local.build.storage.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Case: </span>
                            {local.build.case.title}
                            <span className="right">
                                ${local.build.case.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">Power Supply: </span>{" "}
                            {local.build.power.title}
                            <span className="right">
                                ${local.build.power.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">CPU Cooler: </span>
                            {local.build.cooler.title}
                            <span className="right">
                                ${local.build.cooler.price}
                            </span>
                        </li>
                        <li>
                            <span className="bold">OS: </span>{" "}
                            {local.build.os.title}
                            <span className="right">
                                ${local.build.os.price}
                            </span>
                        </li>
                        {adapter}
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
                            <span className="right">${fee.toPrecision(5)}</span>
                        </li>
                        <hr />
                        <li className="right">
                            <span className="bold">Total: </span>
                            <span className="bold">
                                ${formatCurrency(total, opts)}*
                            </span>
                        </li>
                    </ul>
                    <br />
                    <p className="right disclaimer-text">
                        *Due to the hardware economy constantly fluctuating,
                        this is a rough estimate of the total. The finalized
                        total will typically be anywhere within $30 of the
                        estimated total.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BuildContainer;
