import { Style } from './styles'
import ButtonDefault from "././../../components/button-default/index"

const CriarPublicacao = () => {
    return (
        <>
            <Style>
                <div className='criarPubli-page'>

                    <h1>Criar Publicação</h1>

                    <form>
                        <div className='section-titulo'>
                            <label>Título:</label>
                            <input type="text" />
                        </div>

                        <div className='section-image'>
                            <label>Arquivo de imagem:</label>
                            <button>Escolher arquivo</button>
                        </div>

                        <div className='section-descricao'>
                            <label>Descrição:</label>
                            <textarea cols="60" rows="10"></textarea>
                        </div>
                        <div className='section-button'>
                            <ButtonDefault name='Publicar' />
                        </div>
                        <a id='voltar' href="/gerenciarPublicacoes">Voltar</a>
                    </form>

                </div>
            </Style>
        </>
    );
};

export default CriarPublicacao;