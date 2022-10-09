import React from "react"

interface IuserInput {
    username: string,
    password: string
}

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const validateInputs = (input: IuserInput, e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (!input.username.match(emailRegex)) return false;
    return input.password.length >= 6;
}

export const focused = (uRef: any, pRef: any, userHandler: any, pwHandler: any) => {

    document.activeElement === uRef.current ? userHandler(true) : userHandler(false)
    uRef.current.value === '' && userHandler(false);
    
    document.activeElement === pRef.current ? pwHandler(true) : pwHandler(false)
    pRef.current.value === '' && pwHandler(false);
}