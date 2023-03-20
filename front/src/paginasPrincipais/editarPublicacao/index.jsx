import { Style } from './styles'
import ButtonDefault from "././../../components/button-default/index"
import PublicacaoImg from "./../../assets/publicacao-teste.png"
import Rodape from '../../components/rodape';
import { Link } from 'react-router-dom';

const EditarPublicacao = () => {
    return (
        <>
            <Style>
                <div className='criarPubli-page'>

                    <div className='container-navbar'>
                        <Link to="/gerenciarPublicacoes" className="voltar">
                            Voltar
                        </Link>
                    </div>

                    <h1>Editar Publicação</h1>

                    <form>
                        <div className='section-image'>
                            <img src={PublicacaoImg} alt="Publish" />
                            <label>Alterar imagem:</label>
                            <input type="file" name='' />
                        </div>

                        <div className='section-titulo'>
                            <label>Título:</label>
                            <input type="text" value='Titulo teste test123' />
                        </div>



                        <div className='section-descricao'>
                            <label>Descrição:</label>
                            <textarea cols="60" rows="7" value='Description test Description test Description test Description test Description test Description test Description test Description test Description test.' ></textarea>
                        </div>
                        <div className='section-button'>
                            <ButtonDefault name='Salvar Alterações' />
                        </div>
                    </form>

                </div>

                <Rodape />

            </Style>
        </>
    );
};

export default EditarPublicacao;