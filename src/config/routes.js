import { About } from "../Components/about"
import { CadastrarProjeto } from "../Components/CadastrarProjeto"
import { Cadastro } from "../Components/cadastro"
import Estatistica from "../Components/estatistica"
import { Header } from "../Components/header"
import { Login } from "../Components/login"
import PageNotFound from "../Components/PageNotFound"
import Perfil from "../Components/perfil"
import Projeto from "../Components/Projeto"
import Projetos from "../Components/projetos"

const routes = [
    {
        path: '/',
        component: Header
    },
    {
        path: '/sobre',
        component: About
    },
    {
        path: '/projetos',
        component: Projetos
    },
    {
        path: '/cadastrarprojetos',
        component: CadastrarProjeto
    },
    {
        path: '/projetos/:id',
        component: Projeto
    },
    {
        path: '/estatisticas',
        component: Estatistica
    },
    {
        path: '/cadastro',
        component: Cadastro
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/perfil',
        component: Perfil
    },
    {
        path: '/*',
        component: PageNotFound
    },
]

export default routes