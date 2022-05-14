import React from "react";

import "./Info.css";
import personImage from "../../images/person-image.png";

function Info() {
    return (
        <header>
            <img src={personImage} alt="Pessoa" title="Laura Smith" className="person-image"/>
            <h3 className="person-name">Laura Smith</h3>
            <p className="person-job">Frontend Developer</p>
            <p className="person-website">laurasmith.website</p>

            <div className="contact-btns">
                <button>
                    <i className="bi bi-envelope-fill"></i>
                    Email
                </button>
                <button>
                    <i className="bi bi-linkedin"></i>
                    Linkedin
                </button>
            </div>
        </header>
    );
}

export default Info;