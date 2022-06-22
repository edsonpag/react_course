import React, { useEffect } from "react";

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
                console.log(response.user);
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
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign with Google</button>
            <button onClick={signInWithGithubRedirect}>Sign with Github</button>
        </div>
    );
}

export default SignIn;