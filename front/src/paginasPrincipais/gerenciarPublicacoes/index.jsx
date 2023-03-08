import React from "react";
import { Style } from './styles'
import PublicacaoImg from "./../../assets/publicacao-teste.png"
import AdminCardPubli from "./../../components/adminCardPubli/index"
import ButtonDefault from "../../components/button-default";

const GerenciarPublicacoes = () => {
    return (
        <>
            <Style>
                <div className="gerenciar-page">

                    <h1>Gerenciar Publicações</h1>

                    <div className="container-publicacoes">

                        <a className="opem-modal-teste" href="#openModal-about">
                            <AdminCardPubli img={PublicacaoImg} titulo='Titulo de testee Tit de testee abc aaaaa aaaaaaa aaaaaaa aaaaaaaaaa sssss.' />
                        </a>
                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />
                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />

                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />
                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />
                        <AdminCardPubli img={PublicacaoImg} titulo='Titulo de teste' />

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


            </Style>
        </>
    );
};

export default GerenciarPublicacoes;
