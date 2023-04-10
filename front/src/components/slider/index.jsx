import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem1 from '../../../repository_destaques/img2.png';
import imagem2 from '../../../repository_destaques/img5.png';
import imagem3 from '../../../repository_destaques/img3.png';
import imagem4 from '../../../repository_destaques/img1.png';
import imagem5 from '../../../repository_destaques/img4.png';
import { Style } from './styles.js';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  dotsClass: 'slick-dots',
  customPaging: () => (
    <div className="dot" />
  ),
};

const Carousel = () => {
  return (
    <div>
      <Style>
        <Slider {...settings}>
          <div>
            <img src={imagem4} alt="Imagem do slide 1" className="slide-image" />
          </div>
          <div>
            <img src={imagem2} alt="Imagem do slide 2" className="slide-image" />
          </div>
          <div>
            <img src={imagem3} alt="Imagem do slide 3" className="slide-image" />
          </div>
          <div>
            <img src={imagem1} alt="Imagem do slide 4" className="slide-image" />
          </div>
          <div>
            <img src={imagem2} alt="Imagem do slide 5" className="slide-image" />
          </div>
        </Slider>
      </Style>
    </div>
  );
};

export default Carousel;
