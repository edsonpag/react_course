import React from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../firebase/firebase";

function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }


    return (

        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>Sign with Google</button>
        </div>
    );
}

export default SignIn;