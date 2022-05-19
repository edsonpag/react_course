import React, { useState } from "react";

import "./State.css";

function State03() {

    const [ contact, setContact ] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "johndoe@gmail.com",
        isFavorite: true
    });

    let starIcon = contact.isFavorite ? <i className="bi bi-star-fill"></i> : 
    <i className="bi bi-star"></i>;

    function toogleFavorite() {
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
            <div onClick={toogleFavorite}>
                {starIcon}
            </div>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
}

export default State03;