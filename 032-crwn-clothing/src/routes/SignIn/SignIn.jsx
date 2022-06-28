import React, { useEffect } from "react";

import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup,
    signInWithGithubRedirect,
    createUserDocumentFromAuth
} from "../../firebase/firebase";

import "./SignIn.scss";

function SignIn() {

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

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (

        <div className="sign-in-container">
            <SignInForm 
            logGoogleUser={logGoogleUser} 
            signInWithGithubRedirect={signInWithGithubRedirect}
            />

            <SignUpForm />
        </div>
    );
}

export default SignIn;