import React from "react";
import ResponsiveAppBar from "../../components/navBar/Nav";
import Noticias from "../../components/noticias";
import Rodape from "../../components/rodape";
import Caroussel from "../../components/slider";
import { Style } from './style'

const Home = () => {
  return (
    <div>
      <Style>
      <div className='conteudo'>
        <ResponsiveAppBar/>
        <Caroussel/>
        <Noticias/>
        <Rodape/>
      </div>
      </Style>
    </div>
  );
};

export default Home;
