import React from "react";

import "./Main.css";

import SocialLinks from "../SocialLinks/SocialLinks";

function Main() {

    return (
        <main id="home" className="main">
            <h1 className="title">Frontend Developer.</h1>
            <p className="description">Meu nome é Edson Pagani. Eu construo aplicações solidas usando técnologias modernas de desenvolvimento web. Apaixonado por conhecimento, buscando sempre aprender e compartilhar informações.</p>
            <SocialLinks />
            <button className="contact-btn">
                <a href="#contact">Vamos trabalhar juntos!</a>
            </button>
        </main>
    );
}

export default Main;