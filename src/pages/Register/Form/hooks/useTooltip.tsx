import { useState } from "react";

export const tooltipHandler = (firstPassRef: any, secondPassRef: any, handler: any) => {
    document.activeElement === firstPassRef.current ||
        document.activeElement === secondPassRef.current
        ? handler(true)
        : handler(false)
}

export const useTooltip = (passwordRef: any, confirmPasswordRef: any) => {
    const [tooltipOpen, setTooltip] = useState(false);
    const handler = (event: any) => tooltipHandler(passwordRef, confirmPasswordRef, setTooltip);
    window.addEventListener('click', handler)
    return [tooltipOpen]
}