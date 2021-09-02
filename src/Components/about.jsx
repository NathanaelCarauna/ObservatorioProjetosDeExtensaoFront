export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre Nós</h2>
              <p>Esse projeto consiste no desenvolvimento de um observatório para análise, rastreamento e  armazenamento de projetos de extensão da UPE campus Garanhuns. O desenvolvimento será baseado no modelo proposto por Vieira, Jeferson, chamado MPO (Model for Projects Observatories).</p>
              <h3>Porque Criamos Esse Observatório ?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <p>
                  As pesquisas de extensão são de extrema importância pois o seu foco é na identificação de problemas na sociedade e também é um agente prestador de serviços à comunidade. Sabendo disso, é importante que elas sejam de fácil acesso e amplamente divulgadas, para que a população (foco das pesquisas) possa ter conhecimento sobre essas atividades de extensão e também discutir sobre e participar delas.
                  </p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <p>
                  O uso de observatórios em projetos e pesquisas são uma forma de facilitar o acesso a conhecimentos que os mesmos armazenam, esse é um dos maiores benefícios que sua utilização pode oferecer. Com esse raciocínio em mente, decidimos realizar a criação desse observatório, sendo ele o nosso projeto de Ação Curricular de Extensão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
