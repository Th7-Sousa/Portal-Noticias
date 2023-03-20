import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";

import { Style } from './styles'

import PublicacaoImg from "./../../assets/publicacao-teste.png"
import Publicacao2 from "./../../assets/publicacao-teste2.png"
import CloseIcon from "./../../assets/close-icon.svg"

import AdminCardPubli from "./../../components/adminCardPubli/index"
import ButtonDefault from "../../components/button-default";
import Rodape from "../../components/rodape";

const GerenciarPublicacoes = () => {

    const { signout } = useAuth();
    const navigate = useNavigate()

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
                    <div className="container-publicacoes">

                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo teste' />
                        <AdminCardPubli img={Publicacao2} titulo='Titulo de teste' />
                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />

                        <AdminCardPubli img={Publicacao2} titulo='Titulo de teste' />
                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />
                        <AdminCardPubli img={Publicacao2} titulo='Titulo de teste' />

                    </div>

                    <div className="container-button">

                        <a href="/criarPublicacao">
                            <ButtonDefault name='Criar nova Publicação' />
                        </a>
                    </div>





                    <div id="demo-modal" class="modal">
                        <div class="modal__content">
                            <h4>Configurações da publicação</h4>

                            <div className="modal-content-buttons">
                                <Link to='/editarPublicacao' id="modal-btn-editar">Editar</Link>
                                <button id="modal-btn-excluir">Excluir</button>
                            </div>

                            <a href="#" class="modal__close"><img className="modal-icon-close" src={CloseIcon} alt="Ícone fechar" /></a>
                        </div>
                    </div>



                </div>
                <Rodape />

            </Style>
        </>
    );
};

export default GerenciarPublicacoes;
