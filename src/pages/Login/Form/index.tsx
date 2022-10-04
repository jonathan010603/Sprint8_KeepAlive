import UserIcon from "../assets/UserIcon.svg";
import PasswordIcon from "../assets/PasswordIcon.svg";
import { focused, validateInputs } from "../../../utils/ValidateInputs";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FormContainer, FormTitle, FieldContainer, Field, Icon, ErrorMsg, Btn } from "./formComponents";

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

    const checkFocus = () => {
        focused(usernameRef, passwordRef, setUserFocus, setPassFocus)
        setError(false);
    };

    const onUsernameChange = (e: any) => {
        checkFocus();
        setInput({ ...input, username: e.target.value });
    }

    const onPasswordChange = (e: any) => {
        checkFocus();
        setInput({ ...input, password: e.target.value });
    }

    const btnClicked = (e: any) => {
        validateInputs(input, e)
            ? navigate('/home')
            : setError(true)
    }

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>

            <FieldContainer>
                <Field placeholder="Usuário" type="text"
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

        </FormContainer>
    );
}