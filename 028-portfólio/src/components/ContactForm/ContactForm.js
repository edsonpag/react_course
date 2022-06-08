import React, { useState } from "react";
import axios from "axios";

import "./ContactForm.css";

function ContactForm() {

    const [ formData, setFormData ] = useState({
        _subject: "Portfólio Email",
        name: "",
        email: "",
        message: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const url = "https://formsubmit.co/ajax/9972ebed82ff08bd46625f6e9079f882";

            axios.defaults.headers.post["Content-Type"] = "application/json";
            const response = await axios.post(url, {
                _subject: formData._subject,
                name: formData.name,
                email: formData.email,
                message: formData.message
            });

            alert("Email enviado, obrigado");
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value={formData._subject} />

            <div className="name-container">
                <input
                type="text"
                name="name"
                className="form-input"
                id="name"
                autoComplete="on"
                onChange={handleChange}
                value={formData.name}
                required/>

                <label htmlFor="name" className={`form-label ${formData.name && "form-label-top"}`}>Nome</label>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
            </div>


            <div className="email-container">
                <input
                type="email"
                name="email"
                className="form-input"
                autoComplete="on"
                onChange={handleChange}
                value={formData.email}
                required
                />

                <label htmlFor="email" className={`form-label ${formData.email && "form-label-top"}`}>Email</label>

                <span>@</span>
            </div>

            <div className="message-container">
                <textarea 
                    name="message" 
                    className="textarea-message"
                    onChange={handleChange}
                    value={formData.message}
                    required>
                </textarea>

                <label htmlFor="message" className={`form-label ${formData.message && "form-label-top"}`}>Sua mensagem</label>
                    
            </div>

            <button type="submit" className="email-btn">Enviar</button>
        </form>
    );
}



export default ContactForm;