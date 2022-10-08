import UserIcon from "../assets/UserIcon.svg";
import PasswordIcon from "../assets/PasswordIcon.svg";
import { validateInputs } from "./ValidateLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FormContainer, FormTitle, FieldContainer, Field, Icon, ErrorMsg, Btn, RegisterLink } from "./formComponents";
import { loginHandler } from "./helpers";

export const Form = () => {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const onUsernameChange = (e: any) => {
        setInput({ ...input, username: e.target.value });
    }

    const onPasswordChange = (e: any) => {
        setInput({ ...input, password: e.target.value });
    }

    const btnClicked = (e: any) => {
        validateInputs(input, e)
            ? navigate('/home')
            : setError(true)
    }

    useEffect(() => {
        const handler = (event: any) => loginHandler(usernameRef, passwordRef, setUserFocus, setPassFocus);
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>

            <FieldContainer>
                <Field placeholder="Email" type="text"
                    bool={error}
                    autoComplete="on"
                    ref={usernameRef}
                    onInput={onUsernameChange}
                />
                <Icon src={UserIcon} bool={userFocus} />
            </FieldContainer>

            <FieldContainer>
                <Field placeholder="Senha" type="password"
                    bool={error}
                    autoComplete="on"
                    ref={passwordRef}
                    onInput={onPasswordChange}
                />
                <Icon src={PasswordIcon} bool={passFocus} />
            </FieldContainer>

            <ErrorMsg bool={error}>
                Ops, usuário ou senha inválidos.<br />Tente novamente!
            </ErrorMsg>

            <Btn onClick={e => btnClicked(e)}>Continuar</Btn>

            <RegisterLink>
                Não possui uma conta? {" "}
                <span onClick={() => navigate('/register')}>
                    Clique aqui
                </span>
            </RegisterLink>

        </FormContainer>
    );
}