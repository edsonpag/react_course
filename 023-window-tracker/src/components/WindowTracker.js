import React, { useState, useEffect } from "react";

import "./WindowTracker.css";

function WindowTracker() {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {

        function watchWidthChange() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", watchWidthChange);
        
        
        return () => {
            window.removeEventListener("resize", watchWidthChange);
        }
    }, []);

    return(
        <div className="window-tracker">
            <h1>Window Tracker: {windowWidth}</h1>
        </div>
    );
}

export default WindowTracker;