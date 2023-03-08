import React from "react";
import ResponsiveAppBar from "../../components/navBar/Nav";
import Noticias from "../../components/noticias";
import Rodape from "../../components/rodape";
import Slider from "../../components/slider";
import { Style } from './style'

const Home = () => {
  return (
    <div>
      <Style>
      <div className='conteudo'>
        <ResponsiveAppBar/>
        <Slider/>
        <Noticias/>
        <Rodape/>
      </div>
      </Style>
    </div>
  );
};

export default Home;
