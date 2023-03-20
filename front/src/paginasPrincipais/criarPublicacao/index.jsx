import { Style } from "./styles";
import ButtonDefault from "././../../components/button-default/index";
import Rodape from "././../../components/rodape/index";
import { Link } from "react-router-dom";

const CriarPublicacao = () => {
    return (
        <>
            <Style>
                <div className="criarPubli-page">
                    <div className="container-navbar">
                        <Link to="/gerenciarPublicacoes" className="voltar">
                            Voltar
                        </Link>
                    </div>

                    <div className="container-title">
                        <h1>Criar Publicação</h1>
                    </div>

                    <form>
                        <div className="section-titulo">
                            <label>Título:</label>
                            <input className="input-titulo" type="text" />
                        </div>

                        <div className="section-image">
                            <label>Arquivo de imagem:</label>
                            <input
                                className="input-file"
                                type="file"
                                accept="image/png, image/jpeg"
                            />
                        </div>

                        <div className="section-descricao">
                            <label>Descrição:</label>
                            <textarea cols="60" rows="10"></textarea>
                        </div>
                        <div className="section-button">
                            <ButtonDefault name="Publicar" />
                        </div>
                    </form>
                </div>

                <Rodape />
            </Style>
        </>
    );
};

export default CriarPublicacao;
