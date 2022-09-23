import { ReactNode } from "react";
import styled from "styled-components";
import UserIcon from "./assets/UserIcon.svg";
import PasswordIcon from "./assets/PasswordIcon.svg";

const variables = {
    text: "#E0E0E0"
}

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    font-family: Mark Pro;
`

export const FormContainer = styled.div`
    width: 50%;
    height: 100%;
    color: ${variables.text};
    background-image: linear-gradient(to bottom, #33383d, #2d3136, #272a2e, #222327, #1c1d20);
`

export const Hello = styled.span`
    font-size: 60px;
    font-weight: 400;
    line-height: 76px;
    letter-spacing: 0em;
    text-align: left;
`

export const Phrase = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
`

export const FormTitle = styled.span`
    font-size: 30px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
`

export const InsertContainer = styled.div`
    display: flex;
`

export const InputField = ({ inside }: { inside: string }) => {
    return (
        <input type="text" placeholder={inside} />
    );
}

export const InsertUser = () => {
    return (
        <InsertContainer>
            <InputField inside="Usuário" />
            <img src={UserIcon} />
        </InsertContainer>
    );
}

export const InsertPassword = () => {
    return (
        <InsertContainer>
            <InputField inside="Senha" />
            <img src={PasswordIcon} />
        </InsertContainer>
    );
}

export const Message = () => {
    return (
        <>
            <Hello>Olá,<br /></Hello>
            <Phrase>Para continuar navegando de forma<br />segura, efetue o login na rede.</Phrase>
        </>
    );
}