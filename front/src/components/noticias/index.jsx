import React, { useState, useEffect } from "react";
import axios from "axios";
import { Style } from './styles';

const Noticias = () => {
    const [publicacoes, setPublicacoes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPublicacao, setSelectedPublicacao] = useState(null);

    useEffect(() => {
        async function getPublicacoes() {
            try {
                const response = await axios.get("http://localhost:3001/publicacoes");
                setPublicacoes(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getPublicacoes();
    }, []);

    const openModal = (publicacao) => {
        setSelectedPublicacao(publicacao);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPublicacao(null);
        setModalIsOpen(false);
    };

    return (
        <>
            <Style>
                <div className="feed">
                    <div class='titulo'>Últimas Noticias</div>

                    <div className="container-publicacoes">
                        {isLoading ? (
                            <h2 className="loading">Carregando...</h2>
                        ) : (
                            <div className="container-publicacoes">
                                {publicacoes.map((publicacao) => (
                                    <div className="card-publi" key={publicacao._id}>
                                        <div>
                                            <img
                                                className="img-publi"
                                                src={publicacao.diretorio}
                                                alt={publicacao.titulo}
                                                onClick={() => openModal(publicacao)}
                                            />
                                        </div>

                                        <div className="container-title-buttons">
                                            <h5>{publicacao.titulo}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {selectedPublicacao && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <div className="modal-content">
                                    <h2>Descrição</h2>
                                    <p>{selectedPublicacao.descricao}</p>
                                    <button className="close-button" onClick={closeModal}>
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Style>
        </>
    );
};

export default Noticias;
