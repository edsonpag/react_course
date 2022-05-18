import React from "react";  

import "./App.css";

import Header from "./components/Header/Header";
import Travel from "./components/Travel/Travel";

import data from "./database/data";


function App() {
    const travelsElements = data.map((travel) => {
        return (
            <Travel key={travel.id} travel={travel}/>
        );
    })

    return(
        <>
            <Header />
            <div className="travels-container">
                {travelsElements}
            </div>
            
        </>
    );
}

export default App;