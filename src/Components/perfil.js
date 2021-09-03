import React from 'react';
import '../App.css'
import { useAuthState } from '../Context';


function Perfil(){    
    const userDetails = useAuthState();    
    if(userDetails.user){
        return(
    
            <div id="about">
                <h1>                
                    {userDetails.user.nome}
                </h1>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default Perfil;