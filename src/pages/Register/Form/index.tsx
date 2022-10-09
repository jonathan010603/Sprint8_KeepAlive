import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { FormContainer, Field, Btn, LoginLink, FieldContainer, FieldName, PasswordName, PasswordTooltip } from "./formComponents";
import { RegisterContext } from "../RegisterContext";
import { tooltipHandler, useTooltip } from "./hooks/useTooltip";
import { usePasswordValidation } from "./hooks/usePasswordValidation";
import { newUser } from "../../../utils/firebase/auth";
import { useRegisterValidation } from "./hooks/useRegisterValidation";

export const Form = () => {
    const navigate = useNavigate();
    const ctx = useContext(RegisterContext);
    const emailRef = useRef<any>(null);
    const nameRef = useRef<any>(null);
    const surnameRef = useRef<any>(null);
    const firstPasswordRef = useRef<any>(null);
    const secondPasswordRef = useRef<any>(null);
    const [tooltipOpen] = useTooltip(firstPasswordRef, secondPasswordRef);

    const setFirst = (event: any) => {
        ctx.setRegister({ ...ctx.registerState, firstPassword: firstPasswordRef.current.value });
    };

    const setSecond = (event: any) => {
        ctx.setRegister({ ...ctx.registerState, secondPassword: secondPasswordRef.current.value });
    };

    const btnClicked = (event: any) => {
        event.preventDefault();
        btnAvailable && newUser(
            emailRef.current.value,
            firstPasswordRef.current.value,
            nameRef.current.value + " " + surnameRef.current.value
        )
    }

    const [
        validLength, hasNumber, upperCase,
        lowerCase, match, specialChar, valid
    ] = usePasswordValidation(ctx.registerState);

    const [btnAvailable] = useRegisterValidation(ctx.registerState, valid)

    return (
        <FormContainer>
            <FieldContainer>
                <FieldName>Email</FieldName>
                <Field placeholder="Ex: abc@def.com" type="text" ref={emailRef}
                    onInput={() => ctx.setRegister({ ...ctx.registerState, email: emailRef.current.value })}
                />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Nome</FieldName>
                <Field placeholder="Ex: João" type="text" ref={nameRef}
                    onInput={() => ctx.setRegister({ ...ctx.registerState, name: nameRef.current.value })}
                />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Sobrenome</FieldName>
                <Field placeholder="Ex: da Silva" type="text" ref={surnameRef}
                    onInput={() => ctx.setRegister({ ...ctx.registerState, surname: surnameRef.current.value })}
                />
            </FieldContainer>

            <FieldContainer>
                <PasswordName>
                    <PasswordTooltip bool={tooltipOpen} reqs={
                        {
                            validLength: validLength,
                            upperCase: upperCase,
                            lowerCase: lowerCase,
                            specialChar: specialChar,
                            hasNumber: hasNumber,
                            match: match
                        }
                    }>
                        <h1>Senha deve possuir no mínimo:</h1>
                        <span>• 6 caracteres</span>
                        <span>• uma letra maiúscula</span>
                        <span>• uma letra minúscula</span>
                        <span>• um carácter especial</span>
                        <span>• um número</span>
                        <span>• as senhas devem coincidir</span>
                    </PasswordTooltip>
                    Senha
                </PasswordName>
                <Field placeholder="Ex: @123Abc" type="password" ref={firstPasswordRef}
                    onInput={(e: any) => setFirst(e)}
                />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Repetir senha</FieldName>
                <Field placeholder="Ex: @123Abc" type="password" ref={secondPasswordRef}
                    onInput={(e: any) => setSecond(e)}
                />
            </FieldContainer>

            <Btn bool={btnAvailable} onClick={(event: any) => btnClicked(event)}>Continuar</Btn>

            <LoginLink>
                Já possui uma conta? {" "}
                <span onClick={() => navigate('/')}>
                    Clique aqui
                </span>
            </LoginLink>
        </FormContainer>
    );
}