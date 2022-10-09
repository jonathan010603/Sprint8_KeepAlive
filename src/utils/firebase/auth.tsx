import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Navigate } from "react-router-dom";
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

export const signIn = (email: string, password: string, navigate: any, setError: any) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            navigate('/home');
            //userCredential.user
        })
        .catch(error => {
            setError(true);
            password = "";
        });
}