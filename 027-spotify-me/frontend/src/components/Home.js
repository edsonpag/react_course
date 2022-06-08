import React, { useEffect, useState } from "react";

import Profile from "./Spotify/Profile";

import apiRequestUserData from "../utils/apiRequestUserData";
import apiRequestUserAuthorization from "../utils/apiRequestUserAuthorization";

import "./Home.css";

function Home(props) {

    const [ spotifyData, setSpotifyData ] = useState({
        showData: false
    });

    useEffect(() => {
        props.verifyIfTheTokenHasExpired();

        if(props.token) {
            apiRequestUserData(props.token)
            .then((response) => {
                setSpotifyData({
                    showData: true,
                    ...response
                });
            })
            .catch((error) => {
                console.log(error);
            })
        }

    }, []);
   
    async function handleClick() {
        apiRequestUserAuthorization();
    }

    function handleDisplay() {
        if(props.token && spotifyData.showData) {
            return (
                <>
                    <Profile spotifyData={spotifyData} />
                </>
            );
        } else if(props.token) {
            return (
                <p>Carregando ...</p>
            );
        } else {
            return (
                <>
                    <h1 className="title">Spotify Me</h1>
                    <h4 className="description">Por favor faça o login com a sua conta do spotify</h4>
                    <button onClick={handleClick} className="login-btn">Login</button>
                </>
            );
        }
    }

    return (
        <div className="home">    
            {handleDisplay()}
        </div>
    );
}

export default Home;
