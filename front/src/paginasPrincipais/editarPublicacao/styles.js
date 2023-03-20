import Styled from "styled-components";

export const Style = Styled.div`


.criarPubli-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem 3rem 4rem;
    height: 100vh;
    gap: 0.5rem;
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

.container-navbar{
    width: 100%;
}

h1 {
    padding-bottom: 5px;
    border-bottom: 2px solid #127F30;
}

form {
    margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  max-width: max-content;

  border: 1px solid #000;
  padding: 1.3rem 2rem;
  border-radius: 7px;

  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

label {
    font-weight: 500;
    color: #476F40;
}

input, textarea{
    border: 1.5px solid #000;
    border-radius: 5px;
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
    gap: 0.7rem;
    flex-direction: column;
    width: 100%;
}

.section-image img{
    max-width: 120px;
    max-height 80px;
}

.section-image input {
    padding: 5px;
    border-radius: 5px;
    border: none;
}

.section-button {
    width: 100%;
    display: flex;
    justify-content: center;
}


`;
