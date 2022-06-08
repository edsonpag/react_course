import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import apiRequestAcessToken from "../utils/apiRequestAcessToken";


import "./Callback.css";

function Callback(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    let navigate = useNavigate();

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());

        apiRequestAcessToken(params)
        .then((response) => {
            props.updateToken(response.access_token);
            props.updateRefreshToken(response.refresh_token);
            props.updateExpiresIn(response.expires_in);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        })
        
    }, []);

    return (
        <p>Carregando ...</p>
    );
}

export default Callback;