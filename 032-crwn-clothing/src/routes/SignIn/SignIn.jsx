import React, { useEffect } from "react";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Button from "../../components/Button/Button";

import { getRedirectResult } from "firebase/auth";
import { 
    auth,
    signInWithGooglePopup,
    signInWithGithubRedirect,
    createUserDocumentFromAuth
} from "../../firebase/firebase";

import { ReactComponent as GithubIcon } from "../../assets/GithubIcon.svg";
import { ReactComponent as GoogleIcon } from "../../assets/GoogleIcon.svg";

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
            <h2>Entrar</h2>
            <Button
            text="Entrar com o Google"
            buttonType="google"
            onClick={logGoogleUser}
            Icon={GoogleIcon}
            />

            <Button 
            text="Entrar com o Github"
            buttonType="github"
            onClick={signInWithGithubRedirect}
            Icon={GithubIcon}
            />

            <SignUpForm />
        </div>
    );
}

export default SignIn;