import React from "react";

import "./App.css";

import State from "./components/State";
import State02 from "./components/State02";
import State03 from "./components/State03";

import Boxes from "./components/Boxes/Boxes";

function App() {
    return(
        <div>
            <Boxes darkMode={true}/>
        </div>
    );
}

export default App;