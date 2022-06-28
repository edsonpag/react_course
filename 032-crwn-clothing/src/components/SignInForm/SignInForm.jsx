import React, { useState } from "react";

import FormInput from "../FormInput/FormInput";
import Button from "../../components/Button/Button";

import "./SignInForm.scss";

import { ReactComponent as GithubIcon } from "../../assets/GithubIcon.svg";
import { ReactComponent as GoogleIcon } from "../../assets/GoogleIcon.svg";

function SignInForm({ logGoogleUser, signInWithGithubRedirect }) {

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("login User With Email And Password");
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