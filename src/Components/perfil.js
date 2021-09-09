import '../App.css'
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { useAuthState } from '../Context';


function Perfil() {
    useEffect(() => {
        getProjetos();
    }, [])
    const state = useAuthState();
    const [projetos, setProjetos] = useState([]);

    const getProjetos = () => {
        fetch(`https://projetos-ext-upe.herokuapp.com/api/participacao/${JSON.parse(state.userDetails).id}`)
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
                <h1>Meus Projetos</h1>
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

export default Perfil;
