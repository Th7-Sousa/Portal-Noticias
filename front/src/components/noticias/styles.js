import Styled from "styled-components";

export const Style = Styled.div`

.feed {
    display: flex;
    flex-direction: column;
    padding: 0 4rem 3rem 4rem;
}

.titulo{
    color: #127F30;
    font-size: 25px;
    margin-left: 14px;
    margin-top: 50px;
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
    padding-top: 0.4rem;
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
  cursor: pointer;
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
h2 {
    color: #127F30;
}
h5 {
  text-align: justify;
  padding: 4px 4px 10px 4px;
}

a {
    text-decoration: none;
    color: #000;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    width: 60%;
    max-width: 800px;
    border-radius: 5px;
    padding: 2rem;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .close-button {
    background-color: #A9A2A2;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .close-button:hover {
    background-color: #837979;
  }

`;
