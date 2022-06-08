import React, { useEffect, useState } from "react";

import apiRequestUserTopTracks from "../../utils/apiRequestUserTopTracks";

import "./TopTracks.css";

function TopTracks(props) {

    const [ select, setSelect ] = useState("short_term");

    const [ topTracks, setTopTracks ] = useState([]);

    function handleChange(event) {
        const { value } = event.target;

        setSelect(value);
    }

    useEffect(() => {
        apiRequestUserTopTracks(props.token, select)
        .then((response) => {
            setTopTracks(response);
        })
        .catch((error) => {
            console.log(error);
        })

    }, [select]);


    const topTracksElement = topTracks.map((track, index) => {
        const artists = track.artists.map((artist) => {
            return artist.name;
        })

        return (
            <div key={track.id} className="track">
                <p className="track-position">{index+1}</p>
                <img src={track.album.images[2].url} alt="Imagem do album" className="track-image"/>
                <div className="track-description">
                    <p className="track-name">{track.name}</p>
                    <p className="track-artist">{artists.join(", ")}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="top-tracks-container">
            <form className="top-tracks-form">
                <label htmlFor="topTracks">Top Tracks</label>
                <select onChange={handleChange} id="topTracks" name="topTracks" defaultValue={select}>
                    <option value="short_term">4 semanas</option>
                    <option value="medium_term">6 meses</option>
                    <option value="long_term">Histórico Completo</option>
                </select>
            </form>

            <div className="top-tracks">
                {topTracksElement}
            </div>
        </div>
    );
}

export default TopTracks;