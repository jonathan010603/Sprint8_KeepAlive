import { ReactNode } from "react";
import styled from "styled-components";
import LoginImage from "./assets/LoginImage.jpg";

export const Container = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;

    @media screen and (max-width: 480px) {
        min-height: 600px;
    }

    @media screen and (max-width: 480px) and (min-height: 670px) {
        min-height: 850px;
    }

    @media screen and (min-width: 481px) {
        min-height: 850px;
    }

    @media screen and (min-width: 600px) {
        min-height: 100%;
    }

    @media screen and (min-width: 801px) {
        min-height: 100%;
    }

    @media screen and (orientation: landscape) {
        @media screen and (max-height: 349px) {
            min-height: 380px !important;
        }

        @media screen and (min-height: 350px) {
            min-height: 450px !important;
        }
        
        @media screen and (min-width: 600px) {
            min-height: 100%;
        }
        
        @media screen and (min-width: 800px) {
            min-height: 100% !important;
        }
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

    @media screen and (max-width: 800px) {
        display: none;
    }

    @media screen and (min-width: 800px) and (max-height: 480px) {
        min-height: 650px !important;
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

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    @media screen and (max-height: 630px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`
export const LogoTopLeft = styled.img`
    margin-top: 3.24vh;
    margin-bottom: 5vh;
    width: 90vw;
    height: 6.38vh;

    @media screen and (min-width: 801px) {
        display: none;
    }

    @media screen and (min-width: 801px) and (max-height: 480px) {
        display: flex;
    }

    @media screen and (min-width: 600px) {
        margin: 0;
        margin-top: 2vh;
    }

    @media screen and (orientation: landscape) {
        @media screen and (max-height: 480px) {
            height: 15vh !important;
            margin-bottom: 0;
        }

        @media screen and (min-width: 600px) {
            margin: 0;
        }
    }
`

export const Content = styled.div`
    margin-top: 18.2vh;
    display: flex;
    flex-direction: column;
    color: #E0E0E0;

    @media screen and (max-height: 500px) {
        margin-top: 0;
    }

    @media screen and (max-width: 800px) {
        margin-top: 9vh;
        margin-bottom: auto;
        align-items: center;
    }
`

export const Hello = styled.span`
    font-size: 60px;
    font-weight: 300;
    line-height: 76px;
    text-align: left;

    @media screen and (max-height: 500px) {
        line-height: 35px;
        font-size: 4vw !important;
    }

    @media screen and (max-width: 800px) {
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

    @media screen and (max-height: 500px) {
        margin-bottom: 2vh;
        font-size: 12px !important;
    }

    @media screen and (max-width: 799px) {
        font-size: 3.9vw;
        line-height: 30px;
        align-self: flex-start;
    }

    @media screen and (min-width: 800px) and (max-width: 1700px) {
        font-size: 1.2vw;
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