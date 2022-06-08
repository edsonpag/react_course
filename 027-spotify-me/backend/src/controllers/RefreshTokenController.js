import axios from "axios";

const requestAcessTokenWithRefreshToken = async (req, res) => {
    const authToken = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64");

    const refresh_token = req.query.refresh_token;

    const response = await axios({
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        params: {
            grant_type: "refresh_token",
            refresh_token
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${authToken}`
        }
    });

    res.json(response.data);
}

export default {
    requestAcessTokenWithRefreshToken
};