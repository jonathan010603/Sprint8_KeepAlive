import { useEffect, useState } from "react";

export const usePasswordValidation = (ctx: any) => {
    const [validLength, setValidLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        setValidLength(ctx.firstPassword.length >= 6 ? true : false);
        setUpperCase(ctx.firstPassword.toLowerCase() !== ctx.firstPassword);
        setLowerCase(ctx.firstPassword.toUpperCase() !== ctx.firstPassword);
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(ctx.firstPassword));
        setHasNumber(/\d/.test(ctx.firstPassword));
        setMatch(ctx.firstPassword === ctx.secondPassword && !(/^\s*$/.test(ctx.firstPassword)));
    }, [ctx]);

    return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
}