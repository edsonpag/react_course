import React, { useState } from "react";

import "./Meme.css";

import data from "../../database/memesData";

function Meme() {
    const [ meme, setMeme ] = React.useState({
        topText: "",
        bottomText: "",
        image: "https://i.imgflip.com/1g8my4.jpg"
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

    return(
        <main>
            <div className="form">
                <input
                type="text"
                name="topText"
                id="top-text"
                placeholder="Digite alguma coisa"
                autoFocus required
                />

                <input
                type="text"
                name="bottomText"
                id="bottom-text"
                placeholder="Digite alguma coisa"
                required
                />

                <button onClick={getRandomImage}>Get a new meme image 🎨</button>
            </div>

            <div className="image-container">
                <img src={meme.image} alt="Meme image" className="meme-image" />
                <h3 className="top-meme">asdasdasd</h3>
                <h3 className="bottom-meme">asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd</h3>
            </div>
        </main>

    );
}

export default Meme;