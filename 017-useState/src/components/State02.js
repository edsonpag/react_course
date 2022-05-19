import React, { useState } from "react";

import "./State.css";

function State02() {

    const [ thingsArray, setThingsArray ] = useState([]);

    function addNewThing() {
        setThingsArray((prevThingsArray) => {
            const newThing = `Thing ${prevThingsArray.length + 1}`;

            return [...prevThingsArray, newThing];
        });
    }

    const thingsArrayElement = thingsArray.map((thing) => {
        return <li key={thing}>{thing}</li>
    });

    return(
        <section>
            <button onClick={addNewThing}>Adicionar um novo item na lista</button>
            <ul>
                {thingsArrayElement}
            </ul>
        </section>
    );
}


export default State02;