import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

import data from "./data";

function App() {

    const cardsElements = data.map((card) => {
        return <Card
        status={card.status}
        cardImage={card.coverImg}
        cardGrade={card.stats.rating}
        cardReviews={card.stats.reviewCount}
        cardCountry={card.location}
        cardText={card.title}
        cardPrice={card.price}
        cardOpenSpots={card.openSpots}
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