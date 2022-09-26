import { useEffect, useState } from "react"

export const AppRefresh = () => {
    const [second, setSecond] = useState(60);

    const refresh = () => {
        setSecond(second - 1);
    }

    useEffect(() => {
        const timer = setInterval(refresh, 1000);
        return () => { clearInterval(timer) }
    }, []);
}