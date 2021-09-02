import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';

export default ({match}) => {
    useEffect(() => {        
        getProjeto(match.params.id);
    }, [])

    const [projeto, setProjeto] = useState({});

    const getProjeto = (id) => {
        fetch(`http://localhost:8080/api/projetos/${id}`)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setProjeto(data);
            })
    }

    return (
        <div id="descricao">
            <h1>{projeto.titulo}</h1>
            <div name="campus">
                <h3>Campus</h3>
                <p>{projeto.campus}</p>
            </div>
            <div name="cargaHorariaTotal">
                <h3>Carga Horária Total</h3>
                <p>{projeto.cargaHorariaTotal}</p>
            </div>
            <div name="dataDeInicio">
                <h3>Data de Início</h3>
                <p>{projeto.dataDeInicio}</p>
            </div>
            <div name="dataDeConclusao">
                <h3>Data de Conclusão</h3>
                <p>{projeto.dataDeConclusao}</p>
            </div>
            <div name="diasDaSemana">
                <h3>Dias da Semana</h3>
                <p>{projeto.diasDaSemana}</p>
            </div>
            <div name="publicoAlvo">
                <h3>Público Alvo</h3>
                <p>{projeto.publicoAlvo}</p>
            </div>
            <div name="parcerias">
                <h3>Parcerias</h3>
                <p>{projeto.parcerias}</p>
            </div>
            <div name="linhaDeExtensão">
                <h3>Linha De Extensão</h3>
                <p>{projeto.linhaDeExtensão}</p>
            </div>
            <div name="areaTematica">
                <h3>Área Temática</h3>
                <p>{projeto.areaTematica}</p>
            </div>
            <div name="edital">
                <h3>Edital</h3>
                <p>{projeto.edital}</p>
            </div>
            <div name="modalidade">
                <h3>Modalidade</h3>
                <p>{projeto.modalidade}</p>
            </div>
            <div name="resumo">
                <h3>Resumo</h3>
                <p>{projeto.resumo}</p>
            </div>
            <div name="introducao">
                <h3>Introdução</h3>
                <p>{projeto.introducao}</p>
            </div>
            <div name="justificativa">
                <h3>Justificativa</h3>
                <p>{projeto.justificativa}</p>
            </div>
            <div name="objetivos">
                <h3>Objetivos</h3>
                <p>{projeto.objetivos}</p>
            </div>
            <div name="metas">
                <h3>Metas</h3>
                <p>{projeto.metas}</p>
            </div>
            <div name="indicadores">
                <h3>Indicadores</h3>
                <p>{projeto.indicadores}</p>
            </div>
            <div name="metodologia">
                <h3>Metodologia</h3>
                <p>{projeto.metodologia}</p>
            </div>
            <div name="qtdBeneficiados">
                <h3>Quatidade de Beneficiados</h3>
                <p>{projeto.qtdBeneficiados}</p>
            </div>
            <div name="relacaoAtividadePesquisa">
                <h3>Relação Atividade Pesquisa</h3>
                <p>{projeto.relacaoAtividadePesquisa}</p>
            </div>
            <div name="avaliacaoPeloPublico">
                <h3>Avaliação Pelo Público</h3>
                <p>{projeto.avaliacaoPeloPublico}</p>
            </div>
            <div name="produtoFinal">
                <h3>Produto Final</h3>
                <p>{projeto.produtoFinal}</p>
            </div>
            <div name="orcamento">
                <h3>Orçamento</h3>
                <p>{projeto.orcamento}</p>
            </div>
            <div name="referencias">
                <h3>Referências</h3>
                <p>{projeto.referencias}</p>
            </div>
            <div name="usuarios">
                <h3>Usuários</h3>
                {console.log(projeto.usuarios)}
                {/* {projeto.usuarios.map(usuario => {
                    <p key={usuario.id}>{usuario.nome}</p>
                })} */}
            </div>
            <div name="situacao">
                <h3>Situação</h3>
                <p>{projeto.situacao}</p>
            </div>
        </div>
    );
}