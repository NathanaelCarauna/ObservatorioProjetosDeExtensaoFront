import './App.css';
import { AuthProvider } from "./Context";
import { Navigation } from './Components/Navigation'
import { Header } from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './Components/About';
import Projetos from './Components/Projetos';
import Estatistica from './Components/Estatistica';
import Perfil from './Components/Perfil';
import { Cadastro } from './Components/Cadastro';
import { Login } from './Components/Login';
import Projeto from './Components/Projeto';
import { CadastrarProjeto } from './Components/CadastrarProjeto';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Header} ></Route>
            <Route path='/sobre' component={About}></Route>
            <Route path='/projetos' exact component={Projetos}></Route>
            <Route path='/cadastrarprojetos' exact component={CadastrarProjeto}></Route>
            <Route path='/projetos/:id' component={Projeto}></Route>
            <Route path='/estatisticas' component={Estatistica}></Route>
            <Route path='/cadastro' component={Cadastro}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/perfil' component={Perfil}></Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
