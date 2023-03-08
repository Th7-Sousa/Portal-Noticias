import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from './paginasPrincipais/SobreNos';
import Cadastro from './paginasPrincipais/cadastro';
import Login from './paginasPrincipais/login';
import Home from './paginasPrincipais/home';
import Publicacao from './paginasPrincipais/publicacao';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Cadastro />} />
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/publicacao" element={<Publicacao />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;