import React from "react";

import "./Footer.css";

function Footer(props) {

    return (
        <footer>
            <p className="pending-tasks">Você tem {props.pendingTasks} tarefas pendentes</p>
            <button className="clear-all-btn" onClick={props.clearAll}>clear all</button>
        </footer>
    );
}

export default Footer;