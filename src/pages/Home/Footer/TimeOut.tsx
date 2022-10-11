import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { userSignOut } from "../../../utils/firebase/auth";

export const TimeOut = () => {
    const [second, setSecond] = useState(30);
    const navigate = useNavigate();

    const refresh = () => {
        second === 1
            ? userSignOut(navigate)
            : setSecond(second - 1)
    }

    useEffect(() => {
        const timer = setInterval(refresh, 1000);
        return () => { clearInterval(timer) }
    }, [second]);

    return second;
}