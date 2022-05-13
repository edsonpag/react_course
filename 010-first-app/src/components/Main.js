import React from "react";

import "./Main.css";
import reactImage from "../images/reactjs-icon.png";

function Main() {
    return(
        <main>
            <h1>Fun facts about React</h1>

            <ul className="fun-facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

            <img src={reactImage} alt="react image" title="react image" className="react-image"/>
        </main>
    );
}

export default Main;