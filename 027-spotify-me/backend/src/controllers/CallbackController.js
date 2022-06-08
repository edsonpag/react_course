import axios from "axios";

const requestAcessToken = async (req, res) => {

    try {
        const authToken = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64");

        const code = req.query.code || null;

        const response = await axios({
            url: "https://accounts.spotify.com/api/token",
            method: "post",
            params: {
                client_id: process.env.SPOTIFY_CLIENT_ID,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET,
                code,
                grant_type: "authorization_code",
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
            },

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${authToken}`
            }
        });

        res.json(response.data);

    } catch (error) {
        console.log(error);
    }
    
}

export default {
    requestAcessToken
};