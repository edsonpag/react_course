import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

import data from "./data";

function App() {

    const cardsElements = data.map((card) => {
        return <Card
        key={card.id}
        card={card}
        />
    })

    return (
        <>
            <Navbar />
            <Hero />
            <section className="card-container">
                {cardsElements}
            </section>

        </>
        
    );
}

export default App;