import Styled from "styled-components";

export const Style = Styled.div`

.not-found-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 2rem; 
   
    background-color: #ffffff;
}

.content-img-main {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: max-content;
}
.content-img-main img {
    max-width: 80%;
}

.content-mesage {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}

h2 {
    color: #690b81;
    text-align: center;
}

.content-mesage img {
    max-width: 28px;
}

.content-back {
    display: flex;
    justify-content: center;
}

.content-back a {
    color: #fff;
    background-color: #690b81;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    text-decoration: none;
}

.content-back a:hover {
    transform: scale(1.05);
    transition: all 1s;
} 


@media (max-width: 600px) {
    .content-mesage {
        flex-direction: column;
    }
}

`;
