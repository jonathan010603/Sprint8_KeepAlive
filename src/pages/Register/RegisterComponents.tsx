import { ReactNode } from "react";
import styled from "styled-components";
import LoginImage from "./assets/LoginImage.jpg";

export const Container = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;

    @media screen and (max-width: 400px) {
        min-height: 900px;
    }

    @media screen and (max-width: 400px) and (max-height: 600px) {
        min-height: 800px;
    }

    @media screen and (min-width: 350px) and (min-height: 730px) {
        min-height: 1000px;
    }
    
    @media screen and (min-width: 370px) and (max-height: 330px) {
        min-height: 600px;
    }

    @media screen and (min-width: 380px) and (max-width: 400px) {
        min-height: 1100px;
    }
    
    @media screen and (min-width: 401px) {
        min-height: 1200px;
    }


    @media screen and (min-width: 420px) and (max-height: 590px) {
        min-height: 820px;
    }

    @media screen and (min-width: 420px) and (max-height: 330px) {
        min-height: 600px;
    }
    
    @media screen and (min-width: 640px) and (max-height: 350px) {
        min-height: 600px;
    }
    
    @media screen and (min-width: 665px) and (max-height: 380px) {
        min-height: 670px;
    }

    @media screen and (min-width: 700px) and (max-height: 540px) {
        min-height: 780px;
    }

    @media screen and (min-width: 890px) and (max-height: 414px) {
        min-height: 670px;
    }
    
    @media screen and (min-width: 844px) and (max-height: 400px) {
        min-height: 630px;
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

    @media screen and (max-width: 767px) {
        display: none;
    }
    
    @media screen and (max-height: 630px) {
        display: none !important;
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

    @media screen and (max-width: 767px) {
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

    @media screen and (min-width: 768px) and (min-height: 631px) {
        display: none !important;
    }

    @media screen and (max-height: 767px) {
        margin-top: 1vh;
        height: 13vh;
        display: flex;
        width: 80vw;
    }

    @media screen and (max-height: 1200px) and (max-width: 950px) { 
        height: 10vh;
        display: flex !important;
    }
`

export const Content = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    color: #E0E0E0;

    @media screen and (max-height: 500px) {
        margin-top: 0;
    }

    @media screen and (max-width: 767px) {
        margin-bottom: auto;
        align-items: center;
    }
`

export const Title = styled.span`
    font-size: 58px;
    font-weight: 300;
    line-height: 76px;
    text-align: left;

    @media screen and (max-height: 500px) {
        line-height: 35px;
        font-size: 4vw !important;
        margin-bottom: 2vh;
    }

    @media screen and (max-width: 767px) {
        font-size: 40px;
        align-self: flex-start;
    }
`

export const Message = () => {
    return (
        <>
            <Title>Criar conta<br /></Title>
        </>
    );
}