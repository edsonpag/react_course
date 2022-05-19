import React from "react";

function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    };

    return (
        <div className="box" onClick={props.handleClick} style={styles}></div>
    );
}

export default Box;