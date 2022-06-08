import generateRandomString from "./generateRandomString.js";

const apiRequestUserAuthorization = () => {
    const scope = "user-read-email user-follow-read playlist-read-private user-top-read";
        
    const state = generateRandomString(16);
    localStorage.setItem("state", state);

    const queryParams = new URLSearchParams();
    queryParams.append("response_type", "code");
    queryParams.append("client_id", process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    queryParams.append("scope", scope);
    queryParams.append("redirect_uri", process.env.REACT_APP_SPOTIFY_REDIRECT_URI);
    queryParams.append("state", state);


    window.location.assign("https://accounts.spotify.com/authorize?" + queryParams);
}

export default apiRequestUserAuthorization;