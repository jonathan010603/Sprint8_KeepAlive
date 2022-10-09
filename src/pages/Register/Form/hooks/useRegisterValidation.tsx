import { useEffect, useState } from "react";

export const useRegisterValidation = (ctx: any, valid: boolean) => {
    const [btnAvailable, setBtnAvailable] = useState(false);

    useEffect(() => {
        !(/^\s*$/.test(ctx.email)) &&
        !(/^\s*$/.test(ctx.name)) &&
        !(/^\s*$/.test(ctx.surname)) &&
        valid
        ? setBtnAvailable(true) : setBtnAvailable(false)
    }, [ctx]);

    return [btnAvailable];
}