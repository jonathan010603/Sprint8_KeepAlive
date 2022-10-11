import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FormContainer, Field, Btn, LoginLink, FieldContainer, FieldName, PasswordName, PasswordTooltip } from "./formComponents";
import { useTooltip } from "./hooks/useTooltip";
import { usePasswordValidation } from "./hooks/usePasswordValidation";
import { newUser } from "../../../utils/firebase/auth";
import { useRegisterValidation } from "./hooks/useRegisterValidation";

export const Form = () => {
    const navigate = useNavigate();
    const emailRef = useRef<any>(null);
    const nameRef = useRef<any>(null);
    const firstPasswordRef = useRef<any>(null);
    const secondPasswordRef = useRef<any>(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [firstPassword, setFirstPass] = useState("");
    const [secondPassword, setSecPass] = useState("");
    const [tooltipOpen] = useTooltip(firstPasswordRef, secondPasswordRef);
    const [emailError, nameError] = useRegisterValidation({email, name});

    const [
        validLength, hasNumber, 
        upperCase, lowerCase, 
        match, specialChar
    ] = usePasswordValidation({firstPassword, secondPassword});


    const restartForms = () => {
        setEmail("")
        setName("")
        setFirstPass("")
        setSecPass("")
    }

    const isPasswordValid = () => {
        return validLength && hasNumber && upperCase && lowerCase && specialChar && match;
    }

    const isRegisterValid = () => {
        return !emailError && !nameError && isPasswordValid()
    }

    const btnClicked = (event: any) => {
        event.preventDefault();

        isRegisterValid() 
            && newUser(
                emailRef.current.value,
                firstPasswordRef.current.value,
                nameRef.current.value,
                navigate,
                restartForms
            );
    }

    return (
        <FormContainer>
            <FieldContainer>
                <FieldName>Email</FieldName>
                <Field bool={emailError} placeholder="Email" type="text" ref={emailRef}
                    onInput={() => setEmail(emailRef.current.value)}
                />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Nome</FieldName>
                <Field bool={nameError} placeholder="Nome" type="text" ref={nameRef}
                    onInput={() => setName(nameRef.current.value)}
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
                <Field bool={!isPasswordValid()} placeholder="Senha" type="password" ref={firstPasswordRef}
                    autoComplete="on" value={firstPassword}
                    onInput={(e: any) => setFirstPass(firstPasswordRef.current.value)}
                />
            </FieldContainer>

            <FieldContainer>
                <FieldName>Repetir senha</FieldName>
                <Field bool={!isPasswordValid()} placeholder="Repetir senha" type="password" ref={secondPasswordRef}
                    autoComplete="on" value={secondPassword}
                    onInput={(e: any) => setSecPass(secondPasswordRef.current.value)}
                />
            </FieldContainer>

            <Btn bool={isRegisterValid()} onClick={(event: any) => btnClicked(event)}>Continuar</Btn>

            <LoginLink>
                Já possui uma conta? {" "}
                <span onClick={() => navigate('/')}>
                    Clique aqui
                </span>
            </LoginLink>
        </FormContainer>
    );
}