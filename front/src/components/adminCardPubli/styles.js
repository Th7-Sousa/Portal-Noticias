import Styled from "styled-components";

export const Style = Styled.div`

.publicacao {
    max-width: max-content;
    min-height: 325px;

    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: center;

    background-color: #78F164;
    border-radius: 15px;
    padding:0rem;

    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
}

.container-img {
    display: flex;
    max-width: max-content;
    border-bottom: 4px solid #000;
}

.img-principal {
    max-width: 240px;
    border-radius: 15px 15px 0 0;
}

.container-titulo {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.container-titulo p {
    font-weight: bold;
    padding: 0 0.3rem 0 0.2rem;
    max-width: 170px;
    word-wrap:break-word;
}

.icon-option {
    max-width: 20px;
    cursor: pointer;
    opacity: 75%;
    padding: 0.3rem 0.3rem 0 0;
}

button {
    background-color: transparent;
    border: none;
    border-left: 2px solid #000;
}

`;
