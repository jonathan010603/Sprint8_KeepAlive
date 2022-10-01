import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const TimeOut = () => {
    const [second, setSecond] = useState(3600);
    const navigate = useNavigate();

    const refresh = () => {
        second === 1
            ? navigate('/')
            : setSecond(second - 1)
    }

    useEffect(() => {
        const timer = setInterval(refresh, 1000);
        return () => { clearInterval(timer) }
    }, [second]);

    return second;
}