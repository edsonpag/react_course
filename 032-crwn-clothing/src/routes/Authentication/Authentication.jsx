import React, { useEffect } from "react";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth } from "../../firebase/firebase";

import "./Authentication.scss";

function Authentication() {

    useEffect(() => {
        getRedirectResult(auth)
        .then((response) => {
            if(response) {
                createUserDocumentFromAuth(response.user);
            }
        })
        .catch((error) => {
            console.log("Github auth Provider error ", error.message);
        });
    }, []);

    return (

        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;