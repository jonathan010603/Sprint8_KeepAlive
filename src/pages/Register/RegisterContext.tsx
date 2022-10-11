import { createContext, ReactNode, useState } from 'react';
import { Form } from './Form';

interface IReg {
    email: string | null,
    name: string | null,
    firstPassword: string | null,
    secondPassword: string | null,
}

const defaultState = {
    email: "",
    name: "",
    firstPassword: "",
    secondPassword: ""
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