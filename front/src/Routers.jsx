import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from './paginasPrincipais/SobreNos';
import Login from './paginasPrincipais/login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;