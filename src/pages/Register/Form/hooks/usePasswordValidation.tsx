import { useEffect, useState } from "react";

export const usePasswordValidation = ({ firstPassword = "", secondPassword = "" }) => {
    const [validLength, setValidLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        setValidLength(firstPassword.length >= 6 ? true : false);
        setUpperCase(firstPassword.toLowerCase() !== firstPassword);
        setLowerCase(firstPassword.toUpperCase() !== firstPassword);
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
        setHasNumber(/\d/.test(firstPassword));
        setMatch(firstPassword === secondPassword && !(/^\s*$/.test(firstPassword)));
    }, [firstPassword, secondPassword]);

    return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
}