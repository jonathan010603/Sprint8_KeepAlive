import { useEffect, useState } from "react";

export const useRegisterValidation = (fields: any) => {
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);

    useEffect(() => {
        setEmailError(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(fields.email));
        setNameError(/^\s*$/.test(fields.name));
    }, [fields]);

    return [emailError, nameError]
}