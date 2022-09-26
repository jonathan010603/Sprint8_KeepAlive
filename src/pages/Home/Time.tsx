import { useEffect, useState } from "react";

enum Days {
    "domingo" = 0,
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
}

enum Months {
    "janeiro" = 0,
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
}

export const Time = () => {
    const [date, setDate] = useState(new Date());

    const refresh = () => {
        setDate(new Date());
    }

    const weekDay = date.getDay();
    const today = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    useEffect(() => {
        const timer = setInterval(refresh, 1000);
        return () => { clearInterval(timer) }
    }, []);

    return {
        date: `${Days[weekDay]}, ${today} de ${Months[month]} de ${year}`,
        hours: `${hours}:${minutes}`
    }
}