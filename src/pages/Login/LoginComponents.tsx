import { ReactNode } from "react";
import styled from "styled-components";
import LoginImage from "./assets/LoginImage.jpg";

export const Container = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;
    overflow: hidden;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 100%;
    background-image: url(${LoginImage});
    background-size: cover;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

export const LogoTop = styled.img`
    margin-top: 3.24vh;
    width: 15.93vw;
    height: 6.38vh;
`


export const LeftSide = styled.div`
display: flex;
justify-content: center;
width: 50%;
height: 100%;
background-image: linear-gradient(to bottom, #33383d, #2d3136, #272a2e, #222327, #1c1d20);

@media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
}
`
export const LogoTopLeft = styled.img`
    margin-top: 3.24vh;
    width: 90vw;
    height: 6.38vh;

    @media screen and (min-width: 501px) {
        display: none;
    }
`

export const Content = styled.div`
    margin-top: 18.2vh;
    display: flex;
    flex-direction: column;
    color: #E0E0E0;

    @media screen and (max-height: 500px) {
        margin-top: 7vh !important;
    }

    @media screen and (max-width: 500px) {
        align-items: center;
    }
`

export const Hello = styled.span`
    font-size: 60px;
    font-weight: 300;
    line-height: 76px;
    text-align: left;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        line-height: 40px;
        font-size: 5vw !important;
    }

    @media screen and (max-width: 500px) {
        font-size: 40px;
        align-self: flex-start;
    }
`

export const Phrase = styled.span`
    font-size: 0.8vw;
    font-weight: 300;
    line-height: 20px;
    text-align: left;
    margin-bottom: 10vh;

    @media screen and (max-width: 768px) and (max-height: 500px) {
        margin-bottom: 4vh;
        font-size: 12px !important;
    }

    @media screen and (max-width: 500px) {
        font-size: 3.9vw;
        align-self: flex-start;
    }
`

export const Message = () => {
    return (
        <>
            <Hello>Olá,<br /></Hello>
            <Phrase>Para continuar navegando de forma<br />segura, efetue o login na rede.</Phrase>
        </>
    );
}