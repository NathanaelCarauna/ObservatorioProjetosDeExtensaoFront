import '../App.css'
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { useAuthState } from '../Context';


function Projetos() {
    useEffect(() => {
        getProjetos();
    }, [])
    const state = useAuthState();
    const [projetos, setProjetos] = useState([]);

    const getProjetos = () => {
        fetch('https://projetos-ext-upe.herokuapp.com/api/projetos')
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                console.log(data);
                setProjetos(data);
            })
    }

    return (
        <div id="projetos">
            <div className="cabecalho">
                <h1>Projetos</h1>
                <div className="link" >
                    <a href={state.userDetails ? '/cadastrarprojetos' : '/login'} id='cadastrarprojetos'  > Adicione seu projeto! </a>{' '}
                </div>
                <div id='selecaoCampus'>
                    <input id='selecao' list='Campus' autocomplete="off" placeholder="Escolha o Campus" />
                    <datalist id='Campus' >
                        <option id='opcao' value='Garanhuns'>Garanhuns</option>
                        <option id='opcao' value='Arcoverde'>Arcoverde</option>
                    </datalist>
                </div>
            </div>
            <div id='lista'>
                <ul>
                    {projetos.map(projeto => (
                        <Link to={`/projetos/${projeto.id}`}>
                            <li id='projeto' className="projeto" key={projeto.id}>
                                <textarea id='titulo' rows="3" cols="100" disabled>{projeto.titulo}</textarea>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Projetos;
