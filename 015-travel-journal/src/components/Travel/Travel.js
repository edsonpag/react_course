import React from "react";

import "./Travel.css";


function Travel({ travel }) {
    const months = ["Jan", "Feby", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let year = travel.startDate.getFullYear();
    let month = months[travel.startDate.getMonth()];
    let day = travel.startDate.getDate();

    const formatedStartDate = `${day} ${month}, ${year}`;

    year = travel.endDate.getFullYear();
    month = months[travel.endDate.getMonth()];
    day = travel.endDate.getDate();

    const formatedEndDate = `${day} ${month}, ${year}`;

    return(
        <div className="travel-container">
            <div className="image-container">
                <img src={travel.image} alt={travel.title} className="travel-img"/>
            </div>

            <div className="travel-body">
                <div className="travel-location">
                    <i className="bi bi-geo-alt-fill location-icon"></i>
                    <p className="location-country">{travel.location.country}</p>
                    <a href={travel.location.googleMaps} className="location-google-maps">View on Google Maps</a>
                </div>

                <div className="travel-description">
                    <h2 className="travel-title">{travel.title}</h2>
                    <p className="travel-date">{formatedStartDate} - {formatedEndDate}</p>
                    <p className="travel-text">{travel.description}</p>
                </div>
            </div>

        </div>
    );
}

export default Travel;