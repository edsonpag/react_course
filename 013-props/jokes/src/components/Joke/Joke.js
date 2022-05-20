import React from "react";

import "./Joke.css";

function Joke(props) {

    const [ isShown, setIsShown ] = React.useState(false);

    function toggleIsShown() {
        setIsShown((prevIsShown) => {
            return !prevIsShown;
        });
    }

    return (
        <div className="joke">
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleIsShown}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
        </div>

    );
}

export default Joke;