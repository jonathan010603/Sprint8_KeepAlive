import { useState } from "react";

export const focusHandler = (userRef: any, passRef: any, userHandler: any, passHandler: any) => {
    if (document.activeElement === userRef.current) {
        userHandler(true);
        passHandler(false);
    } 
    else if (document.activeElement === passRef.current) {
        passHandler(true);
        userHandler(false);
    }
    else {
        passHandler(false);
        userHandler(false);
    }
}

export const useFocus = (userRef: any, passwordRef: any) => {
    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const handler = (event: any) => focusHandler(userRef, passwordRef, setUserFocus, setPassFocus);
    window.addEventListener('click', handler);
    return [userFocus, passFocus];
}