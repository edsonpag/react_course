async function getMemes() {
    const apiUrl = "https://api.imgflip.com/get_memes";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        return data.data.memes;
    }
    catch (error) {
        console.log(error)
    }
    
}

export default getMemes;