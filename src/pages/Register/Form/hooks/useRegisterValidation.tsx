import { useEffect, useState } from "react";

export const useRegisterValidation = (ctx: any) => {
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);

    useEffect(() => {
        setEmailError(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(ctx.email));
        setNameError(/^\s*$/.test(ctx.name));
        setSurnameError(/^\s*$/.test(ctx.surname));
    }, [ctx]);

    return [emailError, nameError, surnameError]
}