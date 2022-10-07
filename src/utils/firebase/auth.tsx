import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initialize";

export const newUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Signed in");
            const user = userCredential.user;
            console.log(user);
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("não deu")
        });
}

export const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Usuário existe")
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}