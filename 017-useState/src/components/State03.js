import React, { useState } from "react";

import "./State.css";

import Star from "./Star";

function State03() {

    const [ contact, setContact ] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "johndoe@gmail.com",
        isFavorite: true
    });

    function changeIsFavorite() {
        setContact((prevContact) => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        });
    }

    return(
        <div className="card">
            <img src="images/img_avatar.png" alt="avatar" className="avatar-img" />
            <Star isFilled={contact.isFavorite} changeIsFavorite={changeIsFavorite}/>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
}

export default State03;