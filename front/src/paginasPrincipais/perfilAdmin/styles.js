import Styled from "styled-components";

export const Style = Styled.div`

.perfilAdmin-page {
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    gap: 3rem;
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

.dados {
    display: flex;
    flex-direction: column;
    gap: 1rem;	
}

.dados-titulo {
    display: flex;
    justify-content: flex-start;
}

h1 {
    border-bottom: 2px solid #127F30;
    padding-bottom: 6px;
}

.content-buttons {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

button {
    cursor: pointer;
    border: 1px solid #068FDC;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    color: #068FDC;
    width: 10rem;
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
  width: 400px;
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
}

#modal-btn-excluir {
    color: #fff;
    background-color: #FF0000;
    padding: 0.5rem 0;
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










form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
    width: 100%;
}

form section {
    display: flex;
    flex-direction: column;
    width: 100%;
}

form input {
    border: 1px solid #000;
    border-radius: 6px;
    padding: 6px;
    width: 100%;
}
label {
    font-size: 14px;
    width: 100%;
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



@media(max-width: 520px){

    .perfilAdmin-page {
        padding: 2rem 1rem;
    }
}

`;
