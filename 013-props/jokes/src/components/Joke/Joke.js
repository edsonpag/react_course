import React from "react";

import "./Joke.css";

function Joke(props) {
    return (
        <div className="joke">
            <p>{props.setup || ""}</p>
            <p>{props.punchline}</p>
        </div>

    );
}

export default Joke;