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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    padding-bottom: 3rem;
    border-bottom: 2px solid #000;
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

.container-button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem 1rem 0 1rem ;
}

.container-rodape {
    border: 2px solid red;
    width: 100%;
}


.opem-modal-teste {
    text-decoration: none;
    color: #000;
}

.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 300px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.modal-content-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 3rem;
}

#modal-btn-editar {
  color: #fff;
  background-color: #127F30;
  padding: 0.5rem 0;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
}
#modal-btn-excluir {
  color: #fff;
  background-color: #Ff0000;
  padding: 0.65rem 0;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.modal__footer {
  text-align: right;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}

.modal-icon-close {
    width: 13px;
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
