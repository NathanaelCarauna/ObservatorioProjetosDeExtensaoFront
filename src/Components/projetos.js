import '../App.css'
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";


function Projetos(){
    useEffect(() => {
        getProjetos();
    }, [])

    const [projetos, setProjetos] = useState([]);

    const getProjetos = () => {
        fetch('http://localhost:8080/api/projetos')
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
                <div id='selecaoCampus'>
                    <input list='Campus' />
                    <datalist id='Campus'>
                        <option value='Garanhuns'/>
                        <option value='ArcoVerde'/>
                    </datalist>
                </div>
            </div>
            <ul>
                {projetos.map(projeto => (   
                    <li id='projeto' className="projeto" key={projeto.id}>
                        <Link to={`/projetos/${projeto.id}` }>
                            <div >
                                <h3>{projeto.titulo}</h3>
                            </div>
                        </Link>
                    </li>             
                ))}
            </ul>
            
        </div>
    )
}

export default Projetos;
