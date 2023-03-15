import Styled from "styled-components";
import backgrounLogin from "./../../assets/background-login.png";

export const Style = Styled.div`

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${backgrounLogin});
    background-repeat: no-repeat;
    background-size: 100% 100vh;
    min-height: 100vh;
    padding: 0 2rem;
}

.modal {
    background-color: #fff;
    padding: 2rem 4rem;
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

h3 {
    padding-top: 2rem;
    padding-bottom: 1rem;
}

input {
    border: none;
    border-bottom: 1px solid #000;
    padding-bottom: 3px;
    width: 100%;
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
    align-items: center;
    color: #837979;
    padding-top: 1rem;
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
    width: 100%;
    border: none;
    border-radius: 0.3rem;
    margin-top: 0.3rem;
    cursor: pointer;
}

#link-provisorio {
    text-decoration: none;
    color: #fff;
}

.section-logo {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
}

.logo {
    max-width: 80px;
}

@media (min-width: 620px) {
    h1 {
        padding: 0 4rem;
    }
}

`;
