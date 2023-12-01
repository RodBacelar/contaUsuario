import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function InicialPage() {
    
    // Transformar em Função para Ajudar
    const [userValid, setUserValid] = useState(false);
    const [erroAut, setErroAut] = useState();
    
    const config = {
        headers:{
            'Authorization' : 'Bearer '.concat(sessionStorage.getItem('token'))
        }
    }

    useEffect(() => {
        async function validaSessao() {
            try {
                const response = await axios.get('http://localhost:3000/inicio', config)
                if(response.status == 200) {
                    setUserValid(true);
                }
            } catch (error) {
                setErroAut(error.response.data);
                setUserValid(false);
            }
        }
        validaSessao();
    }, []);

    if (!userValid) {
        return (
        <>
            <p>{erroAut}</p>
            <Link to="/">Faça Login</Link>
        </>
        )
    }
    
    return (
        <h1>Pagina Inicial</h1>
    )
}