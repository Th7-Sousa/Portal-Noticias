import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './paginasPrincipais/cadastro';
import Login from './paginasPrincipais/login';

import Home from './paginasPrincipais/home';
import Publicacao from './paginasPrincipais/publicacao';
import PerfilUser from './paginasPrincipais/perfilUser';

import GerenciarPublicacoes from './paginasPrincipais/gerenciarPublicacoes';
import CriarPublicacao from './paginasPrincipais/criarPublicacao';
import EditarPublicacao from './paginasPrincipais/editarPublicacao';
import PerfilAdmin from './paginasPrincipais/perfilAdmin';


const Rotas = () => {

    const NoFold = () => {
        return <h1>Página não existe :/ <br /> <a href="/">Voltar</a></h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Cadastro />} />

                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />

                <Route path="/gerenciarPublicacoes" element={<GerenciarPublicacoes />} />
                <Route path="/criarPublicacao" element={<CriarPublicacao />} />
                <Route path="/editarPublicacao" element={<EditarPublicacao />} />
                <Route path="/perfilAdmin" element={<PerfilAdmin />} />

                <Route path="/home" element={<Home />} />
                <Route path="/publicacao" element={<Publicacao />} />
                <Route path="/perfilUser" element={<PerfilUser />} />

                <Route path="*" element={<NoFold />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;