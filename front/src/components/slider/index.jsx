import React from 'react';
import { Style } from './style'

const Slider = () => {
    return (
        <div> 
        <Style>
        <section class="carousel" aria-label="Galeria">
        <ol class="carousel__viewport">
            <li id="carousel__slide1"
                tabindex="0"
                class="carousel__slide">
            <div class="carousel__snapper">
                <a href="#carousel__slide4"
                class="carousel__prev">Ir para o próximo slide</a>
                <a href="#carousel__slide2"
                class="carousel__next">Ir para o próximo slide</a>
            </div>
            </li>

            <li id="carousel__slide2"
                tabindex="0"
                class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1"
                class="carousel__prev">Ir para o próximo slide</a>
            <a href="#carousel__slide3"
                class="carousel__next">Ir para o próximo slide</a>
            </li>

            <li id="carousel__slide3"
                tabindex="0"
                class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2"
                class="carousel__prev">Ir para o próximo slide</a>
            <a href="#carousel__slide4"
                class="carousel__next">Ir para o próximo slide</a>
            </li>

            <li id="carousel__slide4"
                tabindex="0"
                class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3"
                class="carousel__prev">Ir para o próximo slide</a>
            <a href="#carousel__slide1"
                class="carousel__next">Ir para o próximo slide</a>
            </li>
        </ol>

        <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
                <a href="#carousel__slide1"
                class="carousel__navigation-button">Ir para o slide 1</a>
            </li>
            <li class="carousel__navigation-item">
                <a href="#carousel__slide2"
                class="carousel__navigation-button">Ir para o slide 2</a>
            </li>
            <li class="carousel__navigation-item">
                <a href="#carousel__slide3"
                class="carousel__navigation-button">Ir para o slide 3</a>
            </li>
            <li class="carousel__navigation-item">
                <a href="#carousel__slide4"
                class="carousel__navigation-button">Ir para o slide 4</a>
            </li>
            </ol>
        </aside>
        </section>
        </Style>
        </div>
    );
}

export default Slider;