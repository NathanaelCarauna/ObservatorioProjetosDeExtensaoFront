import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useAuthState } from "../Context";

export default ({ match }) => {
    useEffect(() => {
        getProjeto(match.params.id);
    }, [])

    const state = useAuthState();
    const [projeto, setProjeto] = useState({});
    const [comentarios, setComentarios] = useState([])
    const [comentario, setComentario] = useState([])

    const getProjeto = (id) => {
        fetch(`https://projetos-ext-upe.herokuapp.com/api/projetos/${id}`)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setProjeto(data);
                setComentarios(data.comentarios)                
            })
    }
    
    const submmitComentario = (coment) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(coment)
        };
        fetch(`https://projetos-ext-upe.herokuapp.com/api/comentario/${projeto.id}`, requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                console.log(data)
                setComentarios([...comentarios, data]);
                setComentario({comentario: ""});
            })
    }

    const addComentario = () => {
        if(state.userDetails){
            const coment = {usuario: JSON.parse(state.userDetails).nome, comentario: comentario}
            submmitComentario(coment)        
        }else{
            window.location.href = '/login'
        }
    }

    return (
        <div id="descricao">
            <div className='quadro'>
                <div id='projeto_titulo'>
                    <textarea id='tituloG' rows="3" cols="49" disabled value={projeto.titulo}></textarea>
                </div>
                <div id="descricaoProjeto">
                    <div className='glassEffect' name="usuarios">
                        <h3>Usuários</h3>
                        {/* {projeto.usuarios.map(usuario => {
                        <p key={usuario.id}>{usuario.nome}</p>
                    })} */}
                    </div>
                    <div className='glassEffect' name="campus">
                        <h3>Campus</h3>
                        <p justify>{projeto.campus}</p>
                    </div>
                    <div className='glassEffect' name="cargaHorariaTotal">
                        <h3>Carga Horária Total</h3>
                        <p>{projeto.cargaHorariaTotal}</p>
                    </div>
                    <div className='glassEffect' name="dataDeInicio">
                        <h3>Data de Início</h3>
                        <p>{projeto.dataDeInicio}</p>
                    </div>
                    <div className='glassEffect' name="dataDeConclusao">
                        <h3>Data de Conclusão</h3>
                        <p>{projeto.dataDeConclusao}</p>
                    </div>
                    <div className='glassEffect' name="diasDaSemana">
                        <h3>Dias da Semana</h3>
                        <p>{projeto.diasDaSemana}</p>
                    </div>
                    <div className='glassEffect' name="publicoAlvo">
                        <h3>Público Alvo</h3>
                        <textarea id='titulo' rows="2" cols="55" disabled value={projeto.publicoAlvo}></textarea>
                    </div>
                    <div className='glassEffect' name="parcerias">
                        <h3>Parcerias</h3>
                        <textarea id='titulo' rows="2" cols="55" disabled value={projeto.parcerias}></textarea>
                    </div>
                    <div className='glassEffect' name="linhaDeExtensão">
                        <h3>Linha De Extensão</h3>
                        <textarea id='titulo' rows="2" cols="55" disabled value={projeto.linhaDeExtensão}></textarea>
                    </div>
                    <div className='glassEffect' name="areaTematica">
                        <h3>Área Temática</h3>
                        <textarea id='titulo' rows="2" cols="55" disabled value={projeto.areaTematica}></textarea>
                    </div>
                    <div className='glassEffect' name="edital">
                        <h3>Edital</h3>
                        <p>{projeto.edital}</p>
                    </div>
                    <div className='glassEffect' name="modalidade">
                        <h3>Modalidade</h3>
                        <p>{projeto.modalidade}</p>
                    </div>
                    <div className='glassEffect' name="resumo">
                        <h3>Resumo</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.resumo}></textarea>
                    </div>
                    <div className='glassEffect' name="introducao">
                        <h3>Introdução</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.introducao}></textarea>
                    </div>
                    <div align="justify" className='glassEffect' name="justificativa">
                        <h3>Justificativa</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.justificativa}></textarea>
                    </div>
                    <div className='glassEffect' name="objetivos">
                        <h3>Objetivos</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.objetivos}></textarea>
                    </div>
                    <div className='glassEffect' name="metas">
                        <h3>Metas</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.metas}></textarea>
                    </div>
                    <div className='glassEffect' name="indicadores">
                        <h3>Indicadores</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.indicadores}></textarea>
                    </div>
                    <div className='glassEffect' name="metodologia">
                        <h3>Metodologia</h3>
                        <textarea textarea id='titulo' rows="10" cols="58" disabled value={projeto.metodologia}></textarea>
                    </div>
                    <div className='glassEffect' name="qtdBeneficiados">
                        <h3>Quatidade de Beneficiados</h3>
                        <p>{projeto.qtdBeneficiados}</p>
                    </div>
                    <div className='glassEffect' name="relacaoAtividadePesquisa">
                        <h3>Relação Atividade Pesquisa</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.relacaoAtividadePesquisa}></textarea>
                    </div>
                    <div className='glassEffect' name="avaliacaoPeloPublico">
                        <h3>Avaliação Pelo Público</h3>
                        <textarea id='titulo' rows="5" cols="58" disabled value={projeto.avaliacaoPeloPublico}></textarea>
                    </div>
                    <div className='glassEffect' name="produtoFinal">
                        <h3>Produto Final</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.produtoFinal}></textarea>
                    </div>
                    <div className='glassEffect' name="orcamento">
                        <h3>Orçamento</h3>
                        <p>{projeto.orcamento}</p>
                    </div>
                    <div className='glassEffect' name="referencias">
                        <h3>Referências</h3>
                        <textarea id='titulo' rows="10" cols="58" disabled value={projeto.referencias}></textarea>
                    </div>
                    <div className='glassEffect' name="situacao">
                        <h3>Situação</h3>
                        <p>{projeto.situacao}</p>
                    </div>
                    <div className='glassEffect' name="link">
                        <h3>Link Resultado do Projeto</h3>
                        <p><a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4">Visit W3Schools.com!</a></p>
                    </div>
                </div>
                <div>
                    <h2>Comentários:</h2>
                    <div>
                        {comentarios ? comentarios.map((item, i) => {
                            return (
                                <div key={i}>
                                    <p>{item.usuario}</p>
                                    <textarea rows="3" cols="140" id="novoProjeto"
                                        name='comentario'
                                        value={item.comentario}
                                        readOnly
                                    ></textarea>
                                </div>
                            )
                        }) : <></>}
                    </div>
                    <div>
                        <textarea rows="4" cols="140" value={comentario.comentario} onChange={e=> setComentario(e.target.value)}/>
                        <button onClick={addComentario} >Enviar</button>
                        {/* disabled={state.userDetails?false:true} */}
                    </div>
                </div>
            </div>
        </div>
    );
}