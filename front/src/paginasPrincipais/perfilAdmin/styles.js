import Styled from "styled-components";

export const Style = Styled.div`

.perfilAdmin-page {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 4rem;
    gap: 2rem;
}

.dados {
    display: flex;
    flex-direction: column;
    gap: 1rem;	
}

button {
    cursor: pointer;
    border: 1px solid #068FDC;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    color: #068FDC;
}

.opem-modal-teste {
    text-decoration: none;
    color: #000;
}

.modalDialog {
    position: fixed;
    top: 8rem;
    right: 10rem;
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
    max-width: max-content;
    max-width: 400px;
    position: relative;
    margin: 4% auto;
    padding: 20px 40px;
    border-radius: 7px;
    background: #fff;
}

.close {
    position: absolute;
    left: 16rem;
    top: 12px;
    color: #000;
    text-decoration: none;
    font-weight: bold;
}


form {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 0 1rem;
    max-width: max-content;
}

form input {
    border: 1px solid #000;
    border-radius: 6px;
}

.btn-salvar {
    color: #fff;
    background-color: #127F30;
    padding: 0.4rem 1rem;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 1rem;
}

`;
