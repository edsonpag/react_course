import axios from "axios";

const apiRequestUserTopTracks = async (token, timeRange) => {
    const headers = {
        'Authorization': 'Bearer ' + token
    }

    const userTopTracks = await axios({
        url: process.env.REACT_APP_SPOTIFY_API + `/v1/me/top/tracks?limit=50&time_range=${timeRange}`,
        method: "get",
        headers
    });

    return userTopTracks.data.items;
}

export default apiRequestUserTopTracks;