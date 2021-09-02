import { useState } from "react";

export const Cadastro = (props) => {
    const [user, setUser] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    const cadastrar = () => {        
        const user = { nome: nome, email: email, password: password }        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('https://projetos-ext-upe.herokuapp.com/api/usuario', requestOptions)
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
                props.history.push("/login")                
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
                        <label id='legenda' htmlFor="username">Usuario</label>
                        <input type="text" name="username" id="Usuario" placeholder="escreva seu usuario" required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                        <label id='legenda' htmlFor="email">Email</label>
                        <input type="email" name="email" id="Email" placeholder="escreva seu email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label id='legenda' htmlFor="pwd">Senha</label>
                        <input type="password" id="pwd" name="pwd" placeholder="escreva sua senha" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className='botoes'>
                            <button className="botao" > Cadastrar </button>{' '}
                        {user !== null && user !== "" ? <p>Cadastro realizado com sucesso</p>
                            : <p>{errorText}</p>
                        }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
