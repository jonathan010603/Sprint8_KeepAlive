import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./initialize";

export const newUser = (email: string, password: string, fullname: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            updateProfile(userCredential.user, {
                displayName: fullname
            })
            console.log(userCredential.user.displayName)
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage });
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