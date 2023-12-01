import Create from "./Create";
import Login from "./Login";
import '../Styles/UserAcc.css'
import { useState } from "react";

export default function UserAcc() {

    const [ativo, setAtivo] = useState(false);

    function alternar() {
        ativo ? setAtivo(false) : setAtivo(true);
    }

    return (
        <div className={ativo ? 'container ativCreate' : 'container'}>
            <Login/>
            <Create/>
            <div className="painelAlternador esquerdo">
                <h2>Possui uma conta?</h2>
                <p>Faça Login com suas informações</p>
                <button onClick={alternar} className="btnAlt">Login</button>
            </div>
            <div className="painelAlternador direito">
                <h2>Bem Vindo</h2>
                    <p>Faça Login com seu email e senha</p>
                    <button onClick={alternar} className="btnAlt">Criar Conta</button>   
            </div>
        </div>
    )
}