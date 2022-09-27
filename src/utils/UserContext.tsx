import { createContext, ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUser {
    username: string,
    password: string,
    geo: {
        lat: string,
        lon: string
    }
}

const defaultState = {
    username: "",
    password: "",
    geo: {
        lat: '28.1540',
        lon: '52.2430'
    }
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