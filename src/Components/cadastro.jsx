import { useState } from "react";

export const Cadastro = (props) => {
    const [user, setUser] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    const cadastrar = () => {
        console.log("Login chamado")
        const user = { nome: nome, email: email, password: password }
        console.log(user)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:8080/api/usuario', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    console.log(error);
                    setErrorText(error);
                    return Promise.reject(error);
                }

                setUser(data)
                console.log(data.toString())
            })
            .catch(error => {
                setErrorText(error.toString());
                console.error('There was an error!', error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cadastrar();
    }
    return (
        <div id='about'>
            <div className="container" id='formulario' onSubmit={handleSubmit}>
                <div className="conteudo">
                    <form className="formulario">
                        <label className="texto">Cadastro</label>
                        <label id='legenda' for="username">Usuario</label>
                        <input type="text" name="username" id="Usuario" placeholder="escreva seu usuario" required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                        <label id='legenda' for="email">Email</label>
                        <input type="email" name="email" id="Email" placeholder="escreva seu email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label id='legenda' for="pwd">Senha</label>
                        <input type="password" id="pwd" name="pwd" placeholder="escreva sua senha" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        {/* {user !== null && user !== "" ? <span></span>
                            : <p>{errorText}</p>
                        } */}
                        <div className='botoes'>
                            <button className="botao" > Cadastrar </button>{' '}
                            <a href='/login' className="botao" id='login'  > Login </a>{' '}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
