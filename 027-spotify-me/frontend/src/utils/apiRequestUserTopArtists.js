import axios from "axios";

const apiRequestUserTopArtists = async (token, timeRange) => {
    const headers = {
        'Authorization': 'Bearer ' + token
    }

    const response = await axios({
        url: `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${timeRange}`,
        method: "get",
        headers
    })

    return response.data.items;
}

export default apiRequestUserTopArtists;