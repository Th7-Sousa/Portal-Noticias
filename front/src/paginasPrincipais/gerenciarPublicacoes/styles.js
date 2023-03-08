import Styled from "styled-components";

export const Style = Styled.div`

.gerenciar-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4rem 0 4rem;
}

.container-publicacoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    padding: 1.2rem 1rem;
    border: 3px inset #127F30;
    border-radius: 15px;
}

.container-button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem 1rem 0 1rem ;
}



.opem-modal-teste {
    text-decoration: none;
    color: #000;
}

.modalDialog {
    position: fixed;
    top: 10rem;
    right: 30rem;
    bottom: 0;
    left: 0;
    
    opacity:0;
    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;
    pointer-events: none;
}
.modalDialog:target {
    opacity:1;
    pointer-events: auto;
}
.modalDialog > div {
    max-width: 80px;
    width: 20%;
    position: relative;
    margin: 10% auto;
    padding: 20px;
    border-radius: 3px;
    background: #ccc;
}

.close {
    position: absolute;
    left: 5.8rem;
    top: 5px;
    color: #000;
    text-decoration: none;
    font-weight: bold;
}

#tt1, #tt2 {
    width: 4rem;
    margin-top: 7px;
    cursor: pointer;
    border: none;
}

#tt1 {
    background-color: green;
}

#tt2 {
    background-color: red;
}


.section-rodape {
    border: 2px solid red;
    width: 100%;
}



`;
