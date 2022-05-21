import React, { useEffect, useState } from "react";

import getMemes from "../api/getMemes";

import "./Meme.css";

function Meme() {
    const [ allMemes, setAllMemes ] = useState([]);

    useEffect(() => {
        getMemes()
        .then((data) => {
            setAllMemes(data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        image: ""
    });

    function getRandomImage() {
        const selectedMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                image: selectedMeme.url
            }
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    return(
        <main>
            <div className="form">
                <input
                type="text"
                name="topText"
                id="top-text"
                placeholder="Digite alguma coisa"
                value={meme.topText}
                onChange={handleChange}
                autoFocus required
                />

                <input
                type="text"
                name="bottomText"
                id="bottom-text"
                placeholder="Digite alguma coisa"
                value={meme.bottomText}
                onChange={handleChange}
                required
                />

                <button onClick={getRandomImage}>Get a new meme image 🎨</button>
            </div>

            <div className="image-container">
                <img src={meme.image} alt="Meme" className="meme-image" />
                <h3 className="top-meme">{meme.topText}</h3>
                <h3 className="bottom-meme">{meme.bottomText}</h3>
            </div>
        </main>

    );
}

export default Meme;