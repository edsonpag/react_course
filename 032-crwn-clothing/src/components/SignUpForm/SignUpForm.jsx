import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { signInWithEmailAndPassword, createUserDocumentFromAuth } from "../../firebase/firebase";

import "./SignUpForm.scss";

function SignUpForm() {

    const [ formData, setFormData ] = useState(() => {
        return {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    function resetFormData() {
        setFormData({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    }


    async function handleSubmit(event) {
        event.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            alert("Senhas diferentes");
            return;
        }

        try {
            const { user } = await signInWithEmailAndPassword(formData.email, formData.password);
            user.displayName = formData.displayName;
            await createUserDocumentFromAuth(user);
            resetFormData();
        }
        catch(error) {
            if(error.code === "auth/email-already-in-use") {
                alert("Já existe uma conta com esse email.");
            }

            console.log("Error to create a user with email and password: ", error.message);
        }

        
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


    return (
        <div className="sign-up-container">
            <h2 className="sign-up-title">Cadastre-se</h2>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                label="Nome"
                id="displayName"
                type="text"
                name="displayName"
                onChange={handleChange}
                value={formData.displayName}
                required
                />

                <FormInput 
                label="Email"
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                required
                />

                <FormInput 
                label="Senha"
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                required
                />

                <FormInput 
                label="Confirme a senha"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
                />

                <Button 
                text="Criar conta"
                type="submit"
                buttonType="default"
                />
            </form>
        </div>
    );
}

export default SignUpForm;