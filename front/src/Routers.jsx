import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './paginasPrincipais/login';
import NotFound from './paginasPrincipais/notFound';

import Home from './paginasPrincipais/home';

import GerenciarPublicacoes from './paginasPrincipais/gerenciarPublicacoes';
import CriarPublicacao from './paginasPrincipais/criarPublicacao';
import EditarPublicacao from './paginasPrincipais/editarPublicacao';
import PerfilAdmin from './paginasPrincipais/perfilAdmin';

import useAuth from './components/hooks/useAuth';


const PrivateRoute = ({ path, ...props }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate to="/login" />

    );
};



const Rotas = () => {
    return (
        <BrowserRouter>
            < Fragment>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    {/* <Route path="/gerenciarPublicacoes" element={<PrivateRoute element={<GerenciarPublicacoes />} />} /> */}

                    <Route path="/gerenciarPublicacoes" element={<GerenciarPublicacoes />} />
                    <Route path="/criarPublicacao" element={<CriarPublicacao />} />
                    <Route path="/editarPublicacao/:id" component={EditarPublicacao} />

                    <Route path="/perfilAdmin" element={<PerfilAdmin />} />

                    <Route path="/home" element={<Home />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Rotas;