import { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUser {
    username: string,
    password: string,
}

const defaultState = {
    username: "",
    password: "",
};

export const UserContext = createContext<any>(null);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {
    const [globalState, setState] = useState<IUser>(defaultState);

    return (
        <UserContext.Provider value={{ globalState, setState }}>
            {children}
        </UserContext.Provider>
    );
}