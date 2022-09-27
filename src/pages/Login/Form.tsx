import { Btn, ErrorMsg, Field, FieldContainer, FormContainer, FormTitle, Icon } from "./LoginComponents";
import { useRef, useState } from "react";
import { focused, validateInputs } from "../../utils/ValidateInputs";
import { useNavigate } from "react-router-dom";
import UserIcon from "./assets/UserIcon.svg";
import PasswordIcon from "./assets/PasswordIcon.svg";

interface Ifield {
    inputRef?: any,
    type: string,
    inside: string,
    handler: React.ChangeEventHandler<HTMLInputElement>,
    err: boolean
}

const InputField = ({ inputRef, type, inside, handler, err }: Ifield) => {
    return (
        <Field
            ref={inputRef}
            type={type}
            placeholder={inside}
            onInput={handler}
            autoComplete="on"
            style={{
                borderColor: `${err ? '#E9B425' : '#FFFFFF'}`
            }}
        />
    );
}

export const Form = () => {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(false);
    const [inputFocus, setFocus] = useState(false);
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const onUsernameChange = (e: any) => {
        focused(usernameRef, passwordRef, setFocus);
        setError(false);
        setInput({ ...input, username: e.target.value });
    }

    const onPasswordChange = (e: any) => {
        focused(usernameRef, passwordRef, setFocus);
        setError(false);
        setInput({ ...input, password: e.target.value });
    }


    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>

            <FieldContainer>
                <InputField type="text" inside="Usuário" err={error}
                    handler={onUsernameChange}
                    inputRef={usernameRef}
                />
                <Icon src={UserIcon} 
                    style={{ left: `${inputFocus 
                        ? '17.5vw' 
                        : '20.67vw'}` 
                    }} 
                />
            </FieldContainer>

            <FieldContainer>
                <InputField type="password" inside="Senha" err={error}
                    handler={onPasswordChange}
                    inputRef={passwordRef}
                />
                <Icon src={PasswordIcon} 
                    style={{ left: `${inputFocus 
                        ? '17.5vw' 
                        : '20.67vw'}` 
                    }} 
                />
            </FieldContainer>

            <ErrorMsg style={{ visibility: `${error ? 'visible' : 'hidden'}` }}>
                Ops, usuário ou senha inválidos.
                <br />
                Tente novamente!
            </ErrorMsg>

            <Btn onClick={e => validateInputs(input, e) ? navigate('/home') : setError(true)}>
                Continuar
            </Btn>


        </FormContainer>
    );
}