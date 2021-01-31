import React from "react";
import Head from "next/head";

const Seo = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="description"
                content="Locally-based PC builds and upgrades tailored to your every need. Based in Southern California."
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
                integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css?family=Chakra+Petch:400,700&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <title>FLEET PC || Local PC Services</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
    );
};

export default Seo;
