import React from "react";
import { Style } from './styles'
import PublicacaoImg from "./../../assets/publicacao-teste.png"

const Noticias = () => {
    return (
        <>
            <Style>
                <div className="feed">
                    <div class='titulo'>Últimas Noticias</div>

                    <div className="container-publicacoes">
                        <div class='card'>

                            <img src={PublicacaoImg} alt="publicação" />
                            <a href="/publicacao"><h2>Titulo </h2></a>

                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                        <div class='card'>
                            <img src={PublicacaoImg} alt="publicação" />
                            <h2>Titulo </h2>
                        </div>
                    </div>
                </div>
            </Style>
        </>
    );
};

export default Noticias;
