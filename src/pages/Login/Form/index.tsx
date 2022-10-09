import UserIcon from "../assets/UserIcon.svg";
import PasswordIcon from "../assets/PasswordIcon.svg";
import { validateInputs } from "./ValidateLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FormContainer, FormTitle, FieldContainer, Field, Icon, ErrorMsg, Btn, RegisterLink } from "./formComponents";
import { loginHandler } from "./helpers";
import { signIn } from "../../../utils/firebase/auth";
import { useFocus } from "./hooks/useFocus";
import { useLoginValidation } from "./hooks/useLoginValidation";

export const Form = () => {
    const navigate = useNavigate();
    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const [error, setError] = useState(false);
    const [userFocus, passFocus] = useFocus(usernameRef, passwordRef);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const onUsernameChange = (e: any) => {
        setError(false);
        setInput({ ...input, email: e.target.value });
    }

    const onPasswordChange = (e: any) => {
        setError(false);
        setInput({ ...input, password: e.target.value });
    }

    const btnClicked = (e: any) => {
        e.preventDefault();

        if (useLoginValidation(input)) {
            signIn(
                usernameRef.current.value,
                passwordRef.current.value,
                navigate,
                setError
            );
        } else {
            setError(true);
            passwordRef.current.value = "";
        }
    }

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