import React from "react";
import { Style } from './styles'

import PublicacaoImg from "./../../assets/publicacao-teste.png"
import Publicacao2 from "./../../assets/publicacao-teste2.png"

import AdminCardPubli from "./../../components/adminCardPubli/index"
import ButtonDefault from "../../components/button-default";
import Rodape from "../../components/rodape";
import NavAdmin from '../../components/navAdmin';

const GerenciarPublicacoes = () => {
    return (
        <>
            <Style>
                <div className="gerenciar-page">


                    <div className='container-nav'>
                        <div className='edit-logout'>
                            <a href="/perfilAdmin" className='editar-perfil' >Perfil</a>
                            <button className='btn-sair' >Sair</button>
                        </div>
                    </div>



                    <div className="container-title">
                        <h1>Gerenciar Publicações</h1>
                    </div>
                    <div className="container-publicacoes">

                        <a className="opem-modal-teste" href="#openModal-about">
                            <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />
                        </a>
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





                    <div id="openModal-about" className="modalDialog">
                        <div>
                            <a href="#close" title="Close" className="close">X</a>

                            <div className="buttons-modal">
                                <a href="/editarPublicacao">
                                    <button id="tt1">Editar</button>
                                </a>
                                <button id="tt2">Excluir</button>
                            </div>
                        </div>
                    </div>



                </div>
                <Rodape />

            </Style>
        </>
    );
};

export default GerenciarPublicacoes;
