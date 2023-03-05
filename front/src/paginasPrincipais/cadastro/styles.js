import Styled from "styled-components";
import backgrounCadastro from "./../../assets/background-cadastro.png";

export const Style = Styled.div`

.cadastroPage {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${backgrounCadastro});
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    min-height: 100vh;

    padding: 0 2rem;
}

.modal {
    background-color: #fff;
    padding: 0 4rem 1rem 4rem;
    border-radius: 1.5rem;
}

.boas-vindas {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    color: #127F30;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;
}

input {
    border: none;
    border-bottom: 1px solid #000;
    padding-bottom: 3px;
    width: 80%;
}
input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

input::placeholder {
    color: #A9A2A2;
}

.section-link {
    display: flex;
    justify-content: center;
    color: #837979;
}

.section-link p{
    font-size: 14px;
}

.link-login {
    padding-left: 7px;
    color: #068FDC;
    text-decoration: none;
}

button {
    color: #fff;
    background-color: #127F30;
    padding: 0.6rem 4rem;
    width: 80%;
    border: none;
    border-radius: 0.3rem;
    margin-top: 0.3rem;
    cursor: pointer;
}

.section-logo {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
}

.logo {
    max-width: 80px;
}

`;
