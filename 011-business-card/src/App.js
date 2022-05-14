import React from "react";

import Info from "./components/Info/Info";
import About from "./components/About/About";
import Interest from "./components/Interests/Interests";

function App() {
    return(
        <div className="centralizer">
            <Info />
            <About />
            <Interest />
        </div>
    )
}

export default App;