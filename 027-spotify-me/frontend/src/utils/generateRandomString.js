const generateRandomString = (length) => {
    let string = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";

    for(let i = 0; i < length; i++) {
        string += possible[Math.floor(Math.random() * possible.length)];
    }

    return string;
}

export default generateRandomString;