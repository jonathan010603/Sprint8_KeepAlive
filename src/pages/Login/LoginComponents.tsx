import { ReactNode } from "react";
import styled from "styled-components";
import LoginImage from "./assets/LoginImage.jpg";

export const Container = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 100%;
    background-image: url(${LoginImage});
    background-size: cover;
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
`

export const Content = styled.div`
    margin-top: 18.2vh;
    display: flex;
    flex-direction: column;
    color: #E0E0E0;
`

export const Hello = styled.span`
    font-size: 60px;
    font-weight: 300;
    line-height: 76px;
    text-align: left;
`

export const Phrase = styled.span`
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    text-align: left;
    margin-bottom: 12.5vh;
`

export const Message = () => {
    return (
        <>
            <Hello>Olá,<br /></Hello>
            <Phrase>Para continuar navegando de forma<br />segura, efetue o login na rede.</Phrase>
        </>
    );
}