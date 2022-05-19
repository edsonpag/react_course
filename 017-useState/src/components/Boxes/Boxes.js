import React, { useState } from "react";

import data from "./data";
import Box from "./Box";

import "./Boxes.css";

function Boxes(props) {

    const [ boxes, setBoxes ] = useState(data);

    function toggle(id) {
        setBoxes((prevBoxes) => {
            return prevBoxes.map((box) => {
                if(box.id === id) {
                    box.on = !box.on
                }

                return box;
            })
        });
    }

    const boxesElements = boxes.map((box) => {
        return(
            <Box id={box.id} key={box.id} on={box.on} toggle={toggle} />
        );
    })

    return(
        <div className="boxes">
            {boxesElements}
        </div>
    );
}


export default Boxes;