import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Card 
            status="sold out"
            cardImage="images/katie-zaferes.png"
            cardStar = "images/star.png"
            cardGrade = "5.0"
            cardReviews = "(6)"
            cardCountry = "USA"
            cardText = "Life lessons with Katie Zaferes"
            cardPrice = "From $138"
            cardPerson = " / person"
            />
        </>
        
    );
}

export default App;