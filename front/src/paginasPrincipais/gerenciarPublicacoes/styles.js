import Styled from "styled-components";

export const Style = Styled.div`

.gerenciar-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4rem 5rem 4rem;
    gap: 1.5rem;
}

.container-nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 1rem;
}

.edit-logout {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.editar-perfil, .btn-sair {
    text-decoration: none;
    color: #000000;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
}
.btn-sair {
 padding: 8px 10px;
}

.container-publicacoes {
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: top;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    padding-bottom: 2rem;
}

.card-publi {
  max-width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #127F30;
  border-radius: 5px;
}

.img-publi {
  width: 233px;
  height: 160px;
  border-radius: 2px 2px 0 0;
}

.container-title-buttons {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 {
    text-align: center;
    border-bottom: 2px solid #127F30;
    padding-bottom: 5px;
}
h5 {
  text-align: justify;
  padding: 4px 4px 10px 4px;
}

.container-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0 0 4px 4px;
}

#btn-editar, #btn-excluir {
  decoration: none;
  border: 1px solid #000;
  border-radius: 2px;
  padding: 4px;
  cursor: pointer;
}

#btn-editar {
  background-color: #127F30;
}
#btn-excluir {
  background-color: red;
}

.link {
  text-decoration: none;
  color: #000;
}

.container-button-criar {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem 1rem 0 1rem ;
    border-top: 2px solid #000;
}

.container-rodape {
    border: 2px solid red;
    width: 100%;
}

.loading {
  padding-bottom: 14.450rem;
}


@media (max-width: 701px) {
    .container-publicacoes {
        justify-content: center;
    }
    .container-button {
        justify-content: center;
    }
}

`;
