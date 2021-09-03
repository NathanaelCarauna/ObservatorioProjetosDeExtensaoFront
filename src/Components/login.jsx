import { useReducer, useState } from "react";
import { loginUser, useAuthDispatch, useAuthState } from "../Context";
import { AuthReducer, initialState } from "../Context/reducer";

export const Login = (props) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    const dispatch = useAuthDispatch()    
    const { loading, errorMessage } = useAuthState()    

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = { email: email, password: password }
        try {
            let response = await loginUser(dispatch, payload)
            if (!response) return
            props.history.push('/perfil')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id='about'>
            <div className="container" id='formulario' onSubmit={handleLogin}>
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
                        {
                            loading
                            ? <p>Carregando ..</p> 
                            : <button className="botao" > Login </button>
                        }                        
                    </form>
                    <a href="/cadastro">Cadastre-se</a>
                </div>
            </div>

        </div>
    );
};
