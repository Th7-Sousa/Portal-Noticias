import Styled from "styled-components";

export const Style = Styled.div`


.criarPubli-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 4rem 3rem 4rem;
    gap: 2rem;
    height: 100vh;
}

.container-navbar{
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.voltar {
    text-decoration: none;
    color: #fff;
    background-color: #068FDC;
    padding: 0.8rem 4rem;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    padding: 0.6rem 3rem;
}

.container-title {
    width: 100%;
    display: flex;
    justify-content: center;
}

h1 {
    text-align: center;
    border-bottom: 2px solid #127F30;
    padding-bottom: 5px;
}

form {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid #000;
  max-width: max-content;
  padding: 1.6rem 2rem;
  border-radius: 7px;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

label {
    font-weight: 500;
    color: #476F40;
}

input-titulo, textarea{
    border: 1.5px solid #000;
    border-radius: 7px;
    width: 100%;
    padding: 0.2rem 0.3rem;
}

.section-titulo, .section-descricao{
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
}

.section-image {
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
}

.section-image button {
    cursor: pointer;
    border: 1px solid #068FDC;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    color: #068FDC;
}

.section-button {
    width: 100%;
    display: flex;
    justify-content: center;
}

button {
    color: #fff;
    background-color: #127F30;
    padding: 0.8rem 4rem;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}

`;
