import { useState } from "react";

export const CadastrarProjeto = (props) => {
    const [projeto, setProjeto] = useState("");
    const [titulo, setTitulo] = useState("");
    const [campus, setCampus] = useState("");
    const [cargaHorariaTotal, setcargaHorariaTotal] = useState("");
    const [dataDeInicio, setdataDeInicio] = useState("");
    const [dataDeConclusao, setdataDeConclusao] = useState("");
    const [diasDaSemana, setdiasDaSemana] = useState("");
    const [publicoAlvo, setpublicoAlvo] = useState("");
    const [parcerias, setparcerias] = useState("");
    const [linhaDeExtensão, setlinhaDeExtensão] = useState("");
    const [areaTematica, setareaTematica] = useState("");
    const [edital, setedital] = useState("");
    const [modalidade, setmodalidade] = useState("");
    const [resumo, setresumo] = useState("");
    const [introducao, setintroducao] = useState("");
    const [justificativa, setjustificativa] = useState("");
    const [objetivos, setobjetivos] = useState("");
    const [metas, setmetas] = useState("");
    const [indicadores, setindicadores] = useState("");
    const [metodologia, setmetodologia] = useState("");
    const [qtdBeneficiados, setqtdBeneficiados] = useState("");
    const [relacaoAtividadePesquisa, setrelacaoAtividadePesquisa] = useState("");
    const [avaliacaoPeloPublico, setavaliacaoPeloPublico] = useState("");
    const [produtoFinal, setprodutoFinal] = useState("");
    const [orcamento, setorcamento] = useState("");
    const [referencias, setreferencias] = useState("");
    const [usuarios, setusuarios] = useState("");
    const [situacao, setsituacao] = useState("");
    const [errorText, setErrorText] = useState("");

    const cadastrar = () => {
        console.log("Login chamado")
        const projeto = {
            titulo: titulo, campus: campus, cargaHorariaTotal: cargaHorariaTotal, dataDeInicio: dataDeInicio,
            dataDeConclusao: dataDeConclusao, diasDaSemana: diasDaSemana, publicoAlvo: publicoAlvo, parcerias: parcerias,
            linhaDeExtensão: linhaDeExtensão, areaTematica: areaTematica, edital: edital, modalidade: modalidade, resumo: resumo,
            introducao: introducao, justificativa: justificativa, objetivos: objetivos, metas: metas, indicadores: indicadores,
            metodologia: metodologia, qtdBeneficiados: qtdBeneficiados, relacaoAtividadePesquisa: relacaoAtividadePesquisa,
            avaliacaoPeloPublico: avaliacaoPeloPublico, produtoFinal: produtoFinal, orcamento: orcamento, referencias: referencias,
            usuarios: null, situacao: null
        }
        console.log(projeto)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projeto)
        };
        fetch('http://localhost:8080/api/projetos', requestOptions)
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

                setProjeto(data)
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
        <div id='descricao'>
            <div className="container" id='formulario'>
                <div className="conteudoCadastro">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <label className="texto">Novo Projeto</label>
                        <label id='legenda' for="projectname">Título</label>
                        <textarea rows="3" cols="50" name="projectname" id="novoProjeto" placeholder="Título do projeto"
                            required
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}/>
                        <label id='legenda' for="campus">Instituição/Campus</label>
                        <textarea  type="text" name="campus" id="campus" placeholder="A qual campus o projeto pertence"
                            required
                            value={campus}
                            onChange={(e) => setCampus(e.target.value)}/>
                        <label id='legenda' for="cargaHoraria">Carga horária</label>
                        <input type="number" id="cargaHoraria" name="cargaHoraria" placeholder="Carga horária total do projeto"
                            required
                            value={cargaHorariaTotal}
                            onChange={(e) => setcargaHorariaTotal(e.target.value)}/>
                        <label id='legenda' for="dataInicio">Data de início</label>
                        <input type="date" id="dataInicio" name="dataInicio" placeholder="Data de inicio" 
                            required
                            value={dataDeInicio}
                            onChange={(e) => setdataDeInicio(e.target.value)}/>
                        <label id='legenda' for="datafinal">Data de conclusão</label>
                        <input type="date" id="datafinal" name="datafinal" placeholder="Data de conslusão" required
                            value={dataDeConclusao}
                            onChange={(e) => setdataDeConclusao(e.target.value)}/>
                        <label id='legenda' for="diasSemana">Dias da semana</label>
                        <textarea type="text" id="diasSemana" name="diasSemana" placeholder="Dias de atividade"
                            required
                            value={diasDaSemana}
                            onChange={(e) => setdiasDaSemana(e.target.value)}/>
                        <label id='legenda' for="publicoAlvo">Public alvo</label>
                        <textarea rows="5" cols="50" type="text" id="publicoAlvo" name="publicoAlvo" placeholder="Publico alvo"
                            required
                            value={publicoAlvo}
                            onChange={(e) => setpublicoAlvo(e.target.value)}/>
                        <label id='legenda' for="parcerias">Parcerias</label>
                        <textarea rows="5" cols="50" type="text" id="parcerias" name="parcerias" placeholder="Parcerias"
                            required
                            value={parcerias}
                            onChange={(e) => setparcerias(e.target.value)}/>
                        <label id='legenda' for="linhaDeExtensao">Linha de Extensão</label>
                        <textarea rows="5" cols="50" type="text" id="linhaDeExtensao" name="linhaDeExtensao" placeholder="Linha de extensão"
                            required
                            value={linhaDeExtensão}
                            onChange={(e) => setlinhaDeExtensão(e.target.value)}/>
                        <label id='legenda' for="areaTematica">Area temática</label>
                        <textarea rows="5" cols="50" type="text" id="areaTematica" name="areaTematica" placeholder="Area temática"
                            required
                            value={areaTematica}
                            onChange={(e) => setareaTematica(e.target.value)}/>
                        <label id='legenda' for="edital">Edital</label>
                        <textarea type="text" id="edital" name="edital" placeholder="Edital" 
                            required
                            value={edital}
                            onChange={(e) => setedital(e.target.value)}/>
                        <label id='legenda' for="modalidade">Modalidade</label>
                        <textarea rows="5" cols="50" type="text" id="modalidade" name="modalidade" placeholder="Modalidade" 
                            required
                            value={modalidade}
                            onChange={(e) => setmodalidade(e.target.value)}/>
                        <label id='legenda' for="resumo">Resumo</label>
                        <textarea rows="10" cols="50" type="text" id="resumo" name="resumo" placeholder="Resumo"
                            value={resumo}
                            onChange={(e) => setresumo(e.target.value)}/>
                        <label id='legenda' for="introducao">Introducão</label>
                        <textarea rows="10" cols="50" className='longa' type="text" id="introducao" name="introducao" placeholder="Introdução" required
                            value={introducao}
                            onChange={(e) => setintroducao(e.target.value)}/>
                        <label id='legenda' for="justificativa">Justificativa</label>
                        <textarea rows="10" cols="50" type="text" id="justificativa" name="justificativa" placeholder="Justificativa" required
                            value={justificativa}
                            onChange={(e) => setjustificativa(e.target.value)}/>
                        <label id='legenda' for="objetivos">Objetivos</label>
                        <textarea rows="10" cols="50" type="text" id="objetivos" name="objetivos" placeholder="Objetivos" required
                            value={objetivos}
                            onChange={(e) => setobjetivos(e.target.value)}/>
                        <label id='legenda' for="metas">Metas</label>
                        <textarea rows="10" cols="50" type="text" id="metas" name="metas" placeholder="Metas"  required
                            value={metas}
                            onChange={(e) => setmetas(e.target.value)}/>
                        <label id='legenda' for="indicadores">Indicadores</label>
                        <textarea type="text" id="indicadores" name="indicadores" placeholder="Indicadores" required
                            value={indicadores}
                            onChange={(e) => setindicadores(e.target.value)}/>
                        <label id='legenda' for="metodologia">Metodologia</label>
                        <textarea rows="10" cols="50" type="text" id="metodologia" name="metodologia" placeholder="Metodologia" required
                            value={metodologia}
                            onChange={(e) => setmetodologia(e.target.value)}/>
                        <label id='legenda' for="qtdBeneficiados">Quantidade de beneficiados</label>
                        <input type="text" id="qtdBeneficiados" name="qtdBeneficiados" placeholder="Quantidade de beneficiados" required
                            value={qtdBeneficiados}
                            onChange={(e) => setqtdBeneficiados(e.target.value)}/>
                        <label id='legenda' for="relacaoAtividadePesquisa">Relacão da atividade com a pesquisa</label>
                        <textarea rows="10" cols="50" type="text" id="relacaoAtividadePesquisa" name="relacaoAtividadePesquisa"
                            placeholder="Relacão da atividade com a pesquisa" required
                            value={relacaoAtividadePesquisa}
                            onChange={(e) => setrelacaoAtividadePesquisa(e.target.value)}/>
                        <label id='legenda' for="avaliacaoPeloPublico">Forma de avalição pelo público</label>
                        <textarea rows="10" cols="50" id="avaliacaoPeloPublico" name="avaliacaoPeloPublico"
                            placeholder="Forma de avalição pelo público" required
                            value={avaliacaoPeloPublico}
                            onChange={(e) => setavaliacaoPeloPublico(e.target.value)}/>
                        <label id='legenda' for="produtoFinal">Produto final</label>
                        <textarea rows="10" cols="50" id="produtoFinal" name="produtoFinal"
                            placeholder="Qual será o produto final" required
                            value={produtoFinal}
                            onChange={(e) => setprodutoFinal(e.target.value)}/>
                        <label id='legenda' for="orcamento">Orçamento do projeto</label>
                        <input type="number" id="orcamento" name="orcamento" placeholder="Orçamento do projeto" required
                            value={orcamento}
                            onChange={(e) => setorcamento(e.target.value)}/>
                        <label id='legenda' for="referencias">Referências</label>
                        <textarea rows="10" cols="50" className='longa' type="text" id="referencias" name="referencias" placeholder="Referências bibliográficas"
                            required
                            value={referencias}
                            onChange={(e) => setreferencias(e.target.value)}/>
                        


                    <div className='botoes'> 
                        <button className="botao" > Cadastrar </button>{' '}
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};