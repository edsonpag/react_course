import React, { useState, useEffect } from "react";

import apiRequestUserTopArtists from "../../utils/apiRequestUserTopArtists";

import "./TopArtists.css";

function TopArtists(props) {

    const [ topArtists, setTopArtists ] = useState([]);
    const [ select, setSelect ] = useState("short_term");

    useEffect(() => {

        apiRequestUserTopArtists(props.token, select)
        .then(response => {
            setTopArtists(response);
        })
        .catch(error => {
            console.log(error);
        });

    }, [select]);

    function handleChange(event) {
        const { value } = event.target;

        setSelect(value);
    }

    const topArtistsElement = topArtists.map((artist, index) => {
        return (
            <div key={artist.id} className="artist">
                <h4 className="artist-position">{index+1}º {artist.name}</h4>
                <img src={artist.images[2].url} alt="Imagem do artista" />

            </div>
        );
    })

    return (
        <div className="top-artists-container">
            <h3 className="top-artists-title">Top Artistas</h3>
            <form className="top-artists-form">
                <select name="topArtists" onChange={handleChange} defaultValue={select}>
                    <option value="short_term">4 semanas</option>
                    <option value="medium_term">6 meses</option>
                    <option value="long_term">Histórico Completo</option>
                </select>
            </form>

            <div className="artists">
                {topArtistsElement}
            </div>
        </div>
    );
}

export default TopArtists;