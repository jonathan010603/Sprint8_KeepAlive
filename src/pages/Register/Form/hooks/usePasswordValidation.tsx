import { useEffect, useState } from "react";

export const usePasswordValidation = (fields: any) => {
    const [validLength, setValidLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        setValidLength(fields.firstPassword.length >= 6 ? true : false);
        setUpperCase(fields.firstPassword.toLowerCase() !== fields.firstPassword);
        setLowerCase(fields.firstPassword.toUpperCase() !== fields.firstPassword);
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(fields.firstPassword));
        setHasNumber(/\d/.test(fields.firstPassword));
        setMatch(fields.firstPassword === fields.secondPassword && !(/^\s*$/.test(fields.firstPassword)));
    }, [fields]);

    return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
}