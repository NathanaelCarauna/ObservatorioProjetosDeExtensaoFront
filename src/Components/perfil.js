import React from 'react';
import '../App.css'
import { useAuthDispatch, useAuthState } from '../Context';


function Perfil(){    
    const userDetails = useAuthState();    
    console.log(userDetails)
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