import Styled from "styled-components";

export const Style = Styled.div`

.login-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 4rem;
    max-height: max-content;
    padding: 3rem 2rem;
}

.img-ilustrativa-login {
    width: 20rem;
}

.section-form {
    max-width: max-content;
    max-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #127F30;
    border-radius: 0.5rem;
    padding: 0.3rem 1rem 2rem 1rem;
}
.section-form .boas-vindas {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.section-form h1 {
    color: #127F30;
    max-width: max-content;
    max-height: max-content;
}

form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.section-input {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
}
label {
    font-weight: bold;
    color: #000000;
}
input {
    width: 20rem;
    padding: 0.3rem 0.3rem;
    border: 2px solid #000;
    border-radius: 0.5rem;
}

button {
    background-color: #127F30;
    color: #FFFFFF;
    padding: 0.4rem 2.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
}


`;
