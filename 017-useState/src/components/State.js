import React, { useState } from "react";

import "./State.css";

function State() {

    const [ isImportant, setIsImportant ] = useState(true);

    function changeIsImportant() {
        setIsImportant((prevIsImportant) => {
            return !prevIsImportant;
        });
    }


    return(
        <main>
            <h1>useState é importante?</h1>
            <button onClick={changeIsImportant}>
                {isImportant ? "Sim" : "Não"}
            </button>
        </main>

    );
}

export default State;