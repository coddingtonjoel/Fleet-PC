import React from "react";

const Overview = (props) => {
    console.log(props);
    return (
        <div className="overview center">
            <p className="overview-body">{props.build.overview}</p>
            <div className="overview-details row">
                <img
                    className="overview-details-img col l4"
                    src={props.build.img}
                    alt=""
                />
                <div className="overview-details-text col l8">
                    <p>Who the {props.build.title} is for:</p>
                    <ul className="overview-details-list">
                        <li className="overview-details-list-1">
                            {props.build.people[0]}
                        </li>
                        <li className="overview-details-list-2">
                            {props.build.people[1]}
                        </li>
                        <li className="overview-details-list-3">
                            {props.build.people[2]}
                        </li>
                        <li className="overview-details-list-4">
                            {props.build.people[3]}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;
