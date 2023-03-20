import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './paginasPrincipais/cadastro';
import Login from './paginasPrincipais/login';
import NotFound from './paginasPrincipais/notFound';

import Home from './paginasPrincipais/home';
import Publicacao from './paginasPrincipais/publicacao';
import PerfilUser from './paginasPrincipais/perfilUser';

import GerenciarPublicacoes from './paginasPrincipais/gerenciarPublicacoes';
import CriarPublicacao from './paginasPrincipais/criarPublicacao';
import EditarPublicacao from './paginasPrincipais/editarPublicacao';
import PerfilAdmin from './paginasPrincipais/perfilAdmin';

import useAuth from './components/hooks/useAuth';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />;
}


const Rotas = () => {
    return (
        <BrowserRouter>
            < Fragment>
                <Routes>
                    <Route index element={<Login />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />

                    <Route path="/gerenciarPublicacoes" element={<Private Item={GerenciarPublicacoes} />} />
                    <Route path="/criarPublicacao" element={<CriarPublicacao />} />
                    <Route path="/editarPublicacao" element={<EditarPublicacao />} />
                    <Route path="/perfilAdmin" element={<PerfilAdmin />} />

                    <Route path="/home" element={<Home />} />
                    <Route path="/publicacao" element={<Publicacao />} />
                    <Route path="/perfilUser" element={<PerfilUser />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Rotas;