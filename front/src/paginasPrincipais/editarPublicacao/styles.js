import Styled from "styled-components";

export const Style = Styled.div`


.criarPubli-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4rem 3rem 4rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  max-width: max-content;
}

label {
    font-weight: 500;
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
    align-items: center;
    flex-wrap: wrap;
}

.section-image img{
    max-width: 200px;
    max-height 100px;
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

#voltar {
    border: 1px solid green;
    padding: 0.3rem;
    text-decoration: none;
    border-radius: 4px;
}


`;
