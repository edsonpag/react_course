import React, { useState } from "react";


import data from "./data";
import Box from "./Box";

import "./Boxes.css";

function Boxes() {

    const [ boxes, setBoxes ] = useState(data);

    function toggle(id) {
        setBoxes((prevBoxes) => {
            return prevBoxes.map((box) => {
                return box.id === id ? { ...box, on: !box.on } : box;
            });
        });
    }

    const boxesElements = boxes.map((box) => {
        return (
            <Box 
            key={box.id}
            handleClick={() => toggle(box.id)}
            on={box.on}
            />
        );
    });

    return (
        <div className="boxes">
            {boxesElements}
        </div>
    );
}

export default Boxes;