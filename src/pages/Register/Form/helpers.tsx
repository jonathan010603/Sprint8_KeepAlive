export const tooltipHandler = (passRef: any, confirmPassRef: any, handler: any) => {
    document.activeElement === passRef.current ||
    document.activeElement === confirmPassRef.current
        ? handler(true)
        : handler(false)
}