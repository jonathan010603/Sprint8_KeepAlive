import { Btn, Field, FieldContainer, FormContainer, FormTitle } from "./LoginComponents";
import UserIcon from "./assets/UserIcon.svg";
import PasswordIcon from "./assets/PasswordIcon.svg";
import { useState } from "react";
import { validateInputs } from "../../utils/ValidateInputs";
import { useNavigate } from "react-router-dom";

interface Ifield {
    type: string,
    inside: string,
    handler: React.ChangeEventHandler<HTMLInputElement>,
}

const InputField = ({ type, inside, handler }: Ifield) => {
    return (
        <Field
            type={type}
            placeholder={inside}
            onInput={handler}
            autoComplete="on"
        />
    );
}

export const Form = () => {
    const [error, setError] = useState(false);
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const onUsernameChange = (e: any) => setInput({ ...input, username: e.target.value });
    const onPasswordChange = (e: any) => setInput({ ...input, password: e.target.value });
    const navigate = useNavigate();

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <FieldContainer>
                <InputField type="text" inside="Usuário" handler={onUsernameChange} />
                <img src={UserIcon} />
            </FieldContainer>
            <FieldContainer>
                <InputField type="password" inside="Senha" handler={onPasswordChange} />
                <img src={PasswordIcon} />
            </FieldContainer>
            <Btn onClick={e => {
                validateInputs(input, e)
                    ? navigate('/home')
                    : setError(true)
            }}>
                Continuar
            </Btn>
        </FormContainer>
    );
}