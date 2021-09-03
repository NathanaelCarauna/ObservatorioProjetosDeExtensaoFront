import React from 'react';
import '../App.css'
import { useAuthDispatch, useAuthState } from '../Context';


function Perfil(){    
    const data = useAuthState();    
    console.log(data)
    if(data.userDetails){
        return(
    
            <div id="about">
                <h1>                
                    {data.userDetails.nome}
                </h1>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Perfil;