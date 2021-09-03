import { useReducer, useState } from "react";
import { loginUser, useAuthDispatch } from "../Context";
import { AuthReducer, initialState } from "../Context/reducer";

export const Login = (props) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    const dispatch = useAuthDispatch() 

    const login = async (e) => {        
        const payload = { email: email, password: password }   
        try {
            let response = await loginUser(dispatch, payload)
            if (!response) return
            props.history.push('/perfil')
        } catch (error) {
            console.log(error)
        }     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(e);
    }

    return (
        <div id='about'>
            <div className="container" id='formulario' onSubmit={handleSubmit}>
                <div className="conteudo">
                    <form className="formulario">
                        <label className="texto">Login</label>
                        <label id='legenda' htmlFor="email">Email</label>
                        <input type="email" name="email" id="Email" placeholder="escreva seu email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label id='legenda' htmlFor="password">Senha</label>
                        <input type="password" name="password" id="Password" placeholder="escreva sua senha" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <button className="botao" > Login </button>{' '}
                        {user !== null && user !== "" ? <p>{user.nome}</p>
                            : <p>{errorText}</p>
                        }
                    </form>
                    <a href="/cadastro">Cadastre-se</a>
                </div>
            </div>

        </div>
    );
};
