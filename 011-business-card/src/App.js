import React from "react";

import Info from "./components/Info/Info";
import About from "./components/About/About";
import Interest from "./components/Interests/Interests";
import Footer from "./components/Footer/Footer";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
    return(
        <div className="centralizer light-mode">
            <DarkMode />
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

export default App;