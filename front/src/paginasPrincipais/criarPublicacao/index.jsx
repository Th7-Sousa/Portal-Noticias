import { useState } from "react";
import axios from "axios";
import { Style } from "./styles";
import ButtonDefault from "././../../components/button-default/index";
import Rodape from "././../../components/rodape/index";
import { Link } from "react-router-dom";

const CriarPublicacao = () => {

    const [publicacao, setPublicacao] = useState({
        titulo: "",
        descricao: "",
        imagem: null,
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPublicacao((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        setPublicacao((prevState) => ({
            ...prevState,
            imagem: event.target.files[0],
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("titulo", publicacao.titulo);
        formData.append("descricao", publicacao.descricao);
        formData.append("imagem", publicacao.imagem);

        try {
            const response = await axios.post(
                "http://localhost:3001/publicacoes",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };


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


                    <form onSubmit={handleSubmit}>
                        <div className="section-titulo">
                            <label htmlFor="titulo">Título:</label>
                            <input
                                id="titulo"
                                name="titulo"
                                className="input-titulo"
                                type="text"
                                value={publicacao.titulo}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="section-image">
                            <label htmlFor="imagem">Arquivo de imagem:</label>
                            <input
                                id="imagem"
                                name="imagem"
                                className="input-file"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="section-descricao">
                            <label htmlFor="descricao">Descrição:</label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                cols="60"
                                rows="10"
                                value={publicacao.descricao}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="section-button">
                            <button type="submit">Publicar</button>
                        </div>
                    </form>

                </div>

                <Rodape />
            </Style>
        </>
    );
};

export default CriarPublicacao;
