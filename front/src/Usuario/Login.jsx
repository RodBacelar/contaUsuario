import axios from "axios"
import InputFull from "./InputFull";
import * as Yup from "yup"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import '../Styles/Login.css'

const schemaLogin = Yup.object().shape({
    emailLogin: Yup
            .string()
            .required("Digite seu Email")
            .email("Email Inválido"),
    senhaLogin: Yup
            .string()
            .required("Digite sua Senha")
});

export default function Login() {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(schemaLogin)});

    const submitLogin = async (data) => {
        console.log(data);
    }
    
    return(
        <form onSubmit={handleSubmit(submitLogin)} className="login">
            <h2>Faça Login</h2>

            <InputFull 
                id='emailLogin' 
                label='Email' 
                type='text'
                icon='envelope'
                register={register}
                textErro={errors.emailLogin?.message}
            />

            <InputFull 
                id='senhaLogin' 
                label='Senha' 
                type='password'
                icon='lock-alt'
                register={register}
                textErro={errors.senhaLogin?.message}
            />

            <button className="btnSubmit">Entrar</button>
        </form>
    )
}