import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";
import axios from "axios";

import EditarPublicacao from "../editarPublicacao";

import { Style } from './styles'
import ButtonDefault from "../../components/button-default";
import Rodape from "../../components/rodape";

const GerenciarPublicacoes = () => {

    const { signout } = useAuth();
    const navigate = useNavigate()

    const [publicacoes, setPublicacoes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getPublicacoes() {
            try {
                const response = await axios.get('http://localhost:3001/publicacoes');
                setPublicacoes(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getPublicacoes();
    }, []);

    const handleExcluirPublicacao = (id) => {
        const confirmacao = window.confirm("Tem certeza que deseja excluir esta publicação?");
        if (confirmacao) {
            axios.delete(`http://localhost:3001/publicacoes/${id}`)
                .then((response) => {
                    const newPublicacoes = publicacoes.filter((publicacao) => publicacao._id !== id);
                    setPublicacoes(newPublicacoes);
                    console.log(response.data.message);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };



    return (
        <>
            <Style>
                <div className="gerenciar-page">

                    <div className='container-nav'>
                        <div className='edit-logout'>
                            <a href="/perfilAdmin" className='editar-perfil' >Perfil</a>
                            <button className='btn-sair' onClick={() => [signout(), navigate("/login")]} >
                                Sair
                            </button>
                        </div>
                    </div>

                    <div className="container-title">
                        <h1>Gerenciar Publicações</h1>
                    </div>

                    {isLoading ? (
                        <h2 className="loading">Carregando...</h2>
                    ) : (

                        <div className="container-publicacoes">
                            {publicacoes.map(publicacao => (
                                <div className="card-publi" key={publicacao._id}>

                                    <div>
                                        <img className="img-publi" src={publicacao.diretorio} alt={publicacao.titulo} />
                                    </div>

                                    <div className="container-title-buttons">

                                        <h5>{publicacao.titulo}</h5>

                                        <div className="container-buttons">
                                            <button id="btn-excluir" onClick={() => handleExcluirPublicacao(publicacao._id)}>Excluir</button>
                                            <button id="btn-editar">Editar</button>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>

                    )}

                    <div className="container-button-criar">
                        <a href="/criarPublicacao">
                            <ButtonDefault name='Criar nova Publicação' />
                        </a>
                    </div>

                </div>
                <Rodape />
            </Style>

        </>

    )
}

export default GerenciarPublicacoes;