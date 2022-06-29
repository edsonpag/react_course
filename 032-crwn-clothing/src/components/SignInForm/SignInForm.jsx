import React, { useState } from "react";

import FormInput from "../FormInput/FormInput";
import Button from "../../components/Button/Button";

import "./SignInForm.scss";

import { ReactComponent as GithubIcon } from "../../assets/GithubIcon.svg";
import { ReactComponent as GoogleIcon } from "../../assets/GoogleIcon.svg";

import { signInWithGooglePopup, signInWithGithubRedirect, createUserDocumentFromAuth, authWithEmailAndPassword } 
from "../../firebase/firebase";

function SignInForm() {

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    function resetFormData() {
        setFormData({
            email: "",
            password: ""
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await authWithEmailAndPassword(formData.email, formData.password);

            console.log(response);
        }
        catch(error) {
            console.log("error to login user with email and password ", error.message);
        }

        resetFormData();
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="sign-in-title">Entrar</h2>

            <FormInput 
            label="email"
            id="user-email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
            />

            <FormInput 
            label="senha"
            id="user-password"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
            />

            <Button 
            text="Entrar"
            type="submit"
            buttonType="default"
            />

            <Button
            text="Entrar com o Google"
            type="button"
            buttonType="google"
            onClick={logGoogleUser}
            Icon={GoogleIcon}
            />

            <Button 
            text="Entrar com o Github"
            type="button"
            buttonType="github"
            onClick={signInWithGithubRedirect}
            Icon={GithubIcon}
            />
        </form>
    );
}

export default SignInForm;