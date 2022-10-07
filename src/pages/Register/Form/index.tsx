import { focused, validateInputs } from "./ValidateRegister";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FormContainer, Field, Btn, RegisterLink, FieldContainer, FieldName, PasswordName, PasswordTooltip } from "./formComponents";
import { tooltipHandler } from "./helpers";

export const Form = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [tooltipOpen, setTooltip] = useState(false);

    const btnClicked = (e: any) => {
    }

    useEffect(() => {
        const handler = (event: any) => tooltipHandler(passwordRef, confirmPasswordRef, setTooltip);
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    return (
        <FormContainer>
            <FieldContainer>
                <FieldName>Email</FieldName>
                <Field placeholder="Ex: abc@def.com" type="text" ref={emailRef} />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Nome</FieldName>
                <Field placeholder="Ex: João" type="text" ref={nameRef} />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Sobrenome</FieldName>
                <Field placeholder="Ex: da Silva" type="text" ref={surnameRef} />
            </FieldContainer>

            <FieldContainer>
                <PasswordName>
                    <PasswordTooltip bool={tooltipOpen}>
                        <h1>Senha deve possuir no mínimo:</h1>
                        <span>• 6 caracteres</span>
                        <span>• uma letra maiúscula</span>
                        <span>• uma letra minúscula</span>
                        <span>• um carácter especial</span>
                        <span>• um número</span>
                    </PasswordTooltip>
                    Senha
                </PasswordName>
                <Field placeholder="Ex: @123Abc" type="password" ref={passwordRef} />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Repetir Senha</FieldName>
                <Field placeholder="Ex: @123Abc" type="password" ref={confirmPasswordRef} />
            </FieldContainer>

            <Btn onClick={e => btnClicked(e)}>Continuar</Btn>

            <RegisterLink>
                Já possui uma conta? {" "}
                <span onClick={() => navigate('/')}>
                    Clique aqui
                </span>
            </RegisterLink>

        </FormContainer>
    );
}