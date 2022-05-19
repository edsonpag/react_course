import React from "react";

function Star(props) {

    return(
        <div onClick={props.changeIsFavorite}>
            {props.isFilled ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star"></i>}
        </div>

    );
}

export default Star;