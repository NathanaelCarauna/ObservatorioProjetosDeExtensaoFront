export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-5 intro-text'>
                <h1>
                  Bem vindos!
                  <span></span>
                </h1>
                <p>ao observatório de projetos de extesão da UPE Campus Garanhuns!
                </p>
                <a
                  href='/sobre'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Saiba mais
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
