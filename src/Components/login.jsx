import { useState } from "react";

export const Login = (props) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState("");

    const login = () => {
        console.log("Login chamado")
        const account = { email: email, password: password }
        console.log(account)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(account)
        };
        fetch('http://localhost:8080/login', requestOptions)
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
                // console.log(data.toString())
            })
            .catch(error => {
                setErrorText(error.toString());
                console.error('There was an error!', error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }

    return (
        <div id='about'>
            <div className="container" id='formulario' onSubmit={handleSubmit}>
                <div className="conteudo">
                    <form className="formulario">
                        <label className="texto">Login</label>
                        <label id='legenda' for="email">Email</label>
                        <input type="email" name="email" id="Email" placeholder="escreva seu email" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label id='legenda' for="password">Senha</label>
                        <input type="password" name="password" id="Password" placeholder="escreva sua senha" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <button className="botao" > Login </button>{' '}
                        {user !== null && user !== "" ? <p>{user.nome}</p>
                            : <p>{errorText}</p>
                        }
                    </form>
                </div>
            </div>

        </div>
    );
};
