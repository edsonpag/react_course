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
            cardImage="katie-zaferes.png"
            cardGrade = "5.0"
            cardReviews = {6}
            cardCountry = "USA"
            cardText = "Life lessons with Katie Zaferes"
            cardPrice = {138}
            />
        </>
        
    );
}

export default App;