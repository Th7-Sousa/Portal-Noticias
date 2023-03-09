import { Style } from './styles'
import ButtonDefault from "././../../components/button-default/index"
import PublicacaoImg from "./../../assets/publicacao-teste.png"
import Rodape from '../../components/rodape';
import NavAdmin from '../../components/navAdmin';

const EditarPublicacao = () => {
    return (
        <>
            <Style>
                <div className='criarPubli-page'>

                    <div className="nav"><NavAdmin /></div>

                    <h1>Criar Publicação</h1>

                    <form>
                        <div className='section-titulo'>
                            <label>Título:</label>
                            <input type="text" value='Titulo teste test123' />
                        </div>

                        <div className='section-image'>
                            <img src={PublicacaoImg} alt="Publish" />
                            <button>Alterar imagem</button>
                        </div>

                        <div className='section-descricao'>
                            <label>Descrição:</label>
                            <textarea cols="60" rows="7" value='Description test Description test Description test Description test Description test Description test Description test Description test Description test.' ></textarea>
                        </div>
                        <div className='section-button'>
                            <ButtonDefault name='Salvar Alterações' />
                        </div>
                        <a id='voltar' href="/gerenciarPublicacoes">Voltar</a>
                    </form>

                </div>

                <Rodape />

            </Style>
        </>
    );
};

export default EditarPublicacao;