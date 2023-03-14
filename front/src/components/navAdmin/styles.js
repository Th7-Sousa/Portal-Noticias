import Styled from "styled-components";

export const Style = Styled.div`


.container-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
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


`;
