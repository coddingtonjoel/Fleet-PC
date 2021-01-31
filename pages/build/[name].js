import React from "react";
import { useRouter } from "next/router";
import BuildContainer from "../../components/Builds/BuildContainer";
import BuildHeader from "../../components/Builds/BuildHeader";

const Build = ({ build }) => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div>
            <BuildHeader build={build} />
            <BuildContainer build={build} />
        </div>
    );
};

export default Build;

export const getStaticProps = async ({ params }) => {
    // get selected build
    const host =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://fleetpc.org";
    const res = await fetch(`${host}/builds.json`);
    const data = await res.json();

    let build = data.filter(item => item.title.toLowerCase() === params.name);
    build = build[0];

    return {
        props: {
            build,
        },
    };
};

export const getStaticPaths = async () => {
    // get all builds
    const host =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://fleetpc.org";
    const res = await fetch(`${host}/builds.json`);
    const data = await res.json();

    const paths = data.map(build => {
        return { params: { name: build.title.toLowerCase() } };
    });

    return {
        paths,
        fallback: false,
    };
};
