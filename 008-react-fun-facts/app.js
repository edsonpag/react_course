function Page() {
    return(
        <div>
            <img src="../react-logo.svg" alt="Logo do ReactJS" 
            title="ReactJS logo" style={{width: "4rem"}}/>

            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars in Github</li>
                <li>Is maintained by Facebook</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));