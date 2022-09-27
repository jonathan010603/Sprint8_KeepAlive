import { ReactNode } from "react";
import styled from "styled-components";

const variables = {
    text: "#E0E0E0"
}

export const Container = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;
`

export const RightSide = styled.img`
    width: 50vw;
    height: 100%;
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
    color: ${variables.text};
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

export const FormTitle = styled.span`
    font-size: 30px;
    font-weight: 300;
    line-height: 38px;
    text-align: left;
    margin-bottom: 2.9vh;
`

export const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
`

export const Field = styled.input`
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    color: ${variables.text};
    box-sizing: border-box;
    height: 5.5vh;
    padding-left: 1.8vw;
    width: 19.7vw;
    margin-right: 1vw;
    border-radius: 50px;
    background: linear-gradient(0deg, #26292C, #26292C), linear-gradient(0deg, #FFFFFF, #FFFFFF);
    border: 1px solid #FFFFFF;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    text-align: left;
`

export const Btn = styled.button`
    color: #FFFFFF;
    padding: 0;
    margin-top: 7.5vh;
    font-size: 18px;
    font-weight: 300;
    line-height: 23px;
    text-align: center;
    height: 6.2vh;
    width: 19.7vw;
    border-radius: 50px;
    box-shadow: 5px 5px 15px 0px #00000026 inset;
    border: 2px solid;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%), 
    linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
    border-image-source: linear-gradient(132.34deg, #FF2D04 22.57%, #C13216 72.04%);
`

export const Message = () => {
    return (
        <>
            <Hello>Olá,<br /></Hello>
            <Phrase>Para continuar navegando de forma<br />segura, efetue o login na rede.</Phrase>
        </>
    );
}

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`