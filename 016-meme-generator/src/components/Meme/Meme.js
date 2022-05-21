import React, { useState } from "react";

import "./Meme.css";

import data from "../../database/memesData";

function Meme() {
    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        image: data.data.memes[Math.floor(Math.random() * data.data.memes.length)].url
    });
    
    const [ allMemes, setAllMemes ] = useState(data);

    function getRandomImage() {
        const memes = allMemes.data.memes;
        const selectedMeme = memes[Math.floor(Math.random() * memes.length)];

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
                <img src={meme.image} alt="Meme image" className="meme-image" />
                <h3 className="top-meme">{meme.topText}</h3>
                <h3 className="bottom-meme">{meme.bottomText}</h3>
            </div>
        </main>

    );
}

export default Meme;