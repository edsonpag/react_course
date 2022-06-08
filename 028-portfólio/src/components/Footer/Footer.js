import React from "react";

import "./Footer.css";

import ContactForm from "../ContactForm/ContactForm";
import SocialLinks from "../SocialLinks/SocialLinks";

function Footer() {

    return (
        <footer id="contact" className="footer">
            <h4 className="section-title">Entre em Contato</h4>
            <ContactForm />
            <SocialLinks />
        </footer>
    );
}

export default Footer;