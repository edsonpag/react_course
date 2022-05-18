import React from "react";

import "./Meme.css";

import data from "../../database/memesData";

function Meme() {

    function getRandomImage() {
        const memes = data.data.memes;
        const selectedMeme = memes[Math.floor(Math.random() * memes.length)];

        console.log(selectedMeme.url);
    }

    return(
        <main>
            <div className="form">
                <input type="text" name="top-text" id="top-text" placeholder="Digite alguma coisa" autoFocus required/>

                <input type="text" name="bottom-text" id="bottom-text" placeholder="Digite alguma coisa" required/>

                <button onClick={getRandomImage}>Get a new meme image 🎨</button>
            </div>
        </main>

    );
}

export default Meme;