import React from "react";
import { useRouter } from "next/router";
import BuildContainer from "../../components/Builds/BuildContainer";
import BuildHeader from "../../components/Builds/BuildHeader";
import data from "../../builds.json";

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
    let build = data.filter(item => item.title.toLowerCase() === params.name);
    build = build[0];

    return {
        props: {
            build,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = data.map(build => {
        return { params: { name: build.title.toLowerCase() } };
    });

    return {
        paths,
        fallback: false,
    };
};
