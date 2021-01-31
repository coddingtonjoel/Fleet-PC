import React from "react";
import Header from "../components/Home/Header";
import Hook from "../components/Home/Hook";
import PresetsContainer from "../components/Home/PresetsContainer";

export default function Home({ data }) {
    return (
        <React.Fragment>
            <Header />
            <Hook />
            <PresetsContainer data={data} />
        </React.Fragment>
    );
}

export const getStaticProps = async () => {
    const host =
        process.env.NODE_ENV === "production"
            ? "http://localhost:3000"
            : "https://fleetpc.org";
    const res = await fetch(`${host}/builds.json`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};
