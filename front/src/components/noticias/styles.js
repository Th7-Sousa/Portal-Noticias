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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    padding: 1.2rem 1rem;
}

.card{
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
}

`;
