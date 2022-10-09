import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./initialize";

export const newUser = (email: string, password: string, fullname: string, emailChecked: boolean) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            updateProfile(userCredential.user, {
                displayName: fullname
            })
            emailChecked = true;
        })
        .catch(error => {
            emailChecked = false;
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
            console.log({ errorCode, errorMessage });
        });
}