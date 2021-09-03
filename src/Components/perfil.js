import React from 'react';
import '../App.css'
import { useAuthState } from '../Context';


function Perfil(){    
    const userDetails = useAuthState();    

    return(
        <div id="about">
            <h1>                
                {userDetails.user.nome}
            </h1>
        </div>
    )
}

export default Perfil;