import axios from "axios";


const apiRequestAcessToken = async (params) => {

    const state = localStorage.getItem("state");

    if(state !== params.state) {
        console.log("state mismatch")
    } else {
        const queryParams = new URLSearchParams();

        queryParams.append("code", params.code);
        queryParams.append("state", params.state);

        const response = await axios({
            url: process.env.REACT_APP_SERVER_URI + "/callback",
            method: "get",
            params: queryParams
        })

        return response.data;
    }
}

export default apiRequestAcessToken;