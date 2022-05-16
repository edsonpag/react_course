import React from "react";

import "./Hero.css";


function Hero() {
    return (
        <section className="hero">
            <div className="hero-image-container">
                <img src="images/airbnb-hero.png" alt="Hero" className="hero-image" />
            </div>
            

            <div className="hero-text">
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}

export default Hero;