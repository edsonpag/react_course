import React, { useEffect } from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup,
    signInWithGithubRedirect,
    createUserDocumentFromAuth
} from "../../firebase/firebase";

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

        <div>
            <h2>Entrar</h2>
            <button onClick={logGoogleUser}>Entrar com Google</button>
            <button onClick={signInWithGithubRedirect}>Entrar com Github</button>

            <h2>Entrar com um email e senha</h2>
            <SignUpForm />
        </div>
    );
}

export default SignIn;