export const loginHandler = (userRef: any, passRef: any, userHandler: any, passHandler: any) => {
    document.activeElement === userRef.current 
        ? userHandler(true)
        : userHandler(false)
        
    document.activeElement === passRef.current
        ? passHandler(true)
        : passHandler(false)
}