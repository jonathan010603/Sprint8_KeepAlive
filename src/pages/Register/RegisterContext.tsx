import { createContext, ReactNode, useState } from 'react';
import { Form } from './Form';

interface IReg {
    email: string | null,
    name: string | null,
    surname: string | null,
    password: string | null,
    confirmPassword: string | null,
}

const defaultState = {
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: ""
};

export const RegisterContext = createContext<any>(null);

export const RegisterCtxForm = () => {
    const [registerState, setRegister] = useState<IReg>(defaultState);

    return (
        <RegisterContext.Provider value={{ registerState, setRegister }}>
            <Form />
        </RegisterContext.Provider>
    );
}