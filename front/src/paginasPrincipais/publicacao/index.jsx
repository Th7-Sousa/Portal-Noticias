import React from "react";
import ResponsiveAppBar from "../../components/navBar/Nav";
import Rodape from "../../components/rodape";
import { Style } from "./styles";
import PublicacaoImg from "./../../assets/publicacao-teste.png";

const Home = () => {
  return (
    <div>
      <Style>
        <div className="conteudo">
          <ResponsiveAppBar />
          <div className="destaques">
            <h1>Titulo da Noticia</h1>
            <img src={PublicacaoImg} alt="publicação" />
            <h4>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla a
              non odit cupiditate dicta dolores illum repellat ration vero ea
              architecto quas, corporis aliquam consequuntur aut dolor recusandae
              quam natus!
            </h4>
          </div>
          <Rodape />
        </div>
      </Style>
    </div>
  );
};

export default Home;
