import { useState } from 'react'
import '../Styles/InputFull.css'

export default function InputFull({id, label, type, textErro = ''}) {

    const [preenchido, setPreenchido] = useState(false);
    const [erroInput, setErroInput] = useState(false);

    function campoVazio(texto) {
        if (texto !== '') {
            setPreenchido(true);
        } else {
            setPreenchido(false);
        }
    }

    return (
        <div className='inputFull'>
            <input style={{borderColor: erroInput ? 'red' : preenchido ? 'lightgreen' : '#e9e9e9'}}
                id={id}
                type={type}
                onChange={(e) => campoVazio(e.target.value)} 
            />
            <label className={ preenchido ? 'labelPreen' : ''}
                htmlFor={id}
            >{label}</label>
            <p>{textErro}</p>
        </div>
    )
}