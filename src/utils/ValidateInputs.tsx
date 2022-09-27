import React from "react"

interface IuserInput {
    username: string,
    password: string
}

const emailRegex = /^[\w.+\-]+@compasso\.com\.br$/

export const validateInputs = (input: IuserInput, e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (!input.username.match(emailRegex)) return false;
    return input.password.length >= 6;
}

export const focused = (uRef: any, pRef: any, focusHandler: any) => {
    document.activeElement === uRef.current || pRef.current
        ? focusHandler(true)
        : focusHandler(false)

    uRef.current.value === '' && pRef.current.value === ''
        && focusHandler(false);
}