import axios from "axios";


const apiRequestRefreshToken = async (refreshToken) => {
    const params = new URLSearchParams();

    params.append("refresh_token", refreshToken);

    const response = await axios({
        url: process.env.REACT_APP_SERVER_URI + "/refresh_token",
        method: "get",
        params
    });
    
    return response.data;
}


export default apiRequestRefreshToken;