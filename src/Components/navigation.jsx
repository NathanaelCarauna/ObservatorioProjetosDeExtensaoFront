export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <img src="img/assets/Logo-upe-site.png" className="logoUPE" alt="" />{" "}
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
            Observatorio de Projetos de Extensão
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/projetos' className='page-scroll'>
                Projetos
              </a>
            </li>
            <li>
              <a href='/cadastrarprojetos' className='page-scroll'>
                Novo Projeto
              </a>
            </li>
            <li>
              <a href='/estatiticas' className='page-scroll'>
                Estatisticas
              </a>
            </li>
            <li>
              <a href='/sobre' className='page-scroll'>         
                Sobre
              </a>
            </li>
            <li>
              <a href='/cadastro' className='page-scroll'>
                Cadastro
              </a>
            </li>
            <li>
              <a href='/perfil' className='page-scroll'>
                Perfil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
