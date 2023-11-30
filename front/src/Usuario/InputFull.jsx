import { useState } from 'react'
import '../Styles/InputFull.css'
import 'boxicons';

export default function InputFull({id, label, type, textErro = '', icon}) {

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
            >
                {label}
                <box-icon 
                    type="solid" 
                    name={icon}
                    color={erroInput ? 'red' : preenchido ? 'lightgreen' : '#999'}
                ></box-icon>
            </label>
            <p>{textErro}</p>
            <script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>
        </div>
    )
}