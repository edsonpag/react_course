import axios from "axios";

const apiRequestUserData = async (token) => {
    const headers = {
        'Authorization': 'Bearer ' + token
    }

    const userProfile = await axios({
        url: process.env.REACT_APP_SPOTIFY_API + "/v1/me",
        method: "get",
        headers
    });

    const following = await axios({
        url: process.env.REACT_APP_SPOTIFY_API + "/v1/me/following?type=artist",
        method: "get",
        headers
    });

    const playlists = await axios({
        url: process.env.REACT_APP_SPOTIFY_API + "/v1/me/playlists",
        method: "get",
        headers
    });

    const serializedSpotifyData = {
        display_name: userProfile.data.display_name,
        external_urls: userProfile.data.external_urls,
        followers: userProfile.data.followers,
        images: userProfile.data.images,
        following: following.data.artists,
        playlists: playlists.data.items,
    }

    return serializedSpotifyData;
}

export default apiRequestUserData;