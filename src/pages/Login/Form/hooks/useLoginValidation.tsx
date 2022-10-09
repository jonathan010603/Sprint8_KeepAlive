import { useEffect, useState } from "react";

export const useLoginValidation = (input: any) => {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email))
        && (input.password.length >= 6);
}