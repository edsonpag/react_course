import React from "react";

import { Outlet } from "react-router-dom";

function About() {

    return (
        <>
            <h1>About Route</h1>
            <Outlet></Outlet>
        </>
    );
}

export default About;