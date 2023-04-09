// import { Style } from './styles'
// import ButtonDefault from "././../../components/button-default/index"
// import PublicacaoImg from "./../../assets/publicacao-teste.png"
// import Rodape from '../../components/rodape';
// import { Link } from 'react-router-dom';

// const EditarPublicacao = () => {
//     return (
//         <>
//             <Style>
//                 <div className='criarPubli-page'>

//                     <div className='container-navbar'>
//                         <Link to="/gerenciarPublicacoes" className="voltar">
//                             Voltar
//                         </Link>
//                     </div>

//                     <h1>Editar Publicação</h1>

//                     <form>
//                         <div className='section-image'>
//                             <img src={PublicacaoImg} alt="Publish" />
//                             <label>Alterar imagem:</label>
//                             <input type="file" name='' />
//                         </div>

//                         <div className='section-titulo'>
//                             <label>Título:</label>
//                             <input type="text" value='Titulo teste test123' />
//                         </div>



//                         <div className='section-descricao'>
//                             <label>Descrição:</label>
//                             <textarea cols="60" rows="7" value='Description test Description test Description test Description test Description test Description test Description test Description test Description test.' ></textarea>
//                         </div>
//                         <div className='section-button'>
//                             <ButtonDefault name='Salvar Alterações' />
//                         </div>
//                     </form>

//                 </div>

//                 <Rodape />

//             </Style>
//         </>
//     );
// };

// export default EditarPublicacao;


import React, { useState } from "react";
import axios from "axios";

const EditarPublicacao = ({ publicacao, onPublicacaoEditada }) => {
    const [titulo, setTitulo] = useState(publicacao.titulo);
    const [diretorio, setDiretorio] = useState(publicacao.diretorio);

    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleDiretorioChange = (event) => {
        setDiretorio(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:3001/publicacoes/${publicacao._id}`,
                { titulo, diretorio }
            );
            onPublicacaoEditada(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" value={titulo} onChange={handleTituloChange} />
            </label>
            <label>
                Diretório:
                <input type="text" value={diretorio} onChange={handleDiretorioChange} />
            </label>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default EditarPublicacao;
