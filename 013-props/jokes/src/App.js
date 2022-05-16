import React from "react";

import "./App.css";

import Joke from "./components/Joke/Joke";

function App() {
    return (
        <div className="jokes-container">
            <Joke 
            setup="Whats the best thing about Switzerland?"
            punchline="I dont know, but the flag is a big plus."
            upvotes = {10}
            downvotes = {3}
            isPun = {true}
            comments = {[
                {
                    id: 1,
                    name: "john",
                    body: "This is soo fun",
                    title: "Nice. I love"
                }
            ]}
            />

            <Joke 
            setup="I invented a new word!"
            punchline="Plagiarism!"
            />

            <Joke 
            setup="Did you hear about the mathematician who's afraid of negative numbers?"
            punchline="Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor."
            />

            <Joke 
            punchline="There's no menu: You get what you deserve."
            />

            <Joke 
            punchline="He was just going through a stage."
            />
            
        </div>
        
    );
}

export default App;