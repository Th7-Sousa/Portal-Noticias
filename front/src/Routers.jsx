import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './paginasPrincipais/cadastro';
import Login from './paginasPrincipais/login';

import GerenciarPublicacoes from './paginasPrincipais/gerenciarPublicacoes';
import CriarPublicacao from './paginasPrincipais/criarPublicacao';
import EditarPublicacao from './paginasPrincipais/editarPublicacao';
import PerfilUser from './paginasPrincipais/perfilUser';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Cadastro />} />
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/gerenciarPublicacoes" element={<GerenciarPublicacoes />} />
                <Route path="/criarPublicacao" element={<CriarPublicacao />} />
                <Route path="/editarPublicacao" element={<EditarPublicacao />} />

                <Route path="/perfilUser" element={<PerfilUser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;