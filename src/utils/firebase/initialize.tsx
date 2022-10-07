import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpKyBWCBrNZQgDJlGu3Pfi63k2-YaaoIg",
  authDomain: "keepalive-compass.firebaseapp.com",
  projectId: "keepalive-compass",
  storageBucket: "keepalive-compass.appspot.com",
  messagingSenderId: "237815511541",
  appId: "1:237815511541:web:e14587b986d227ab09c8bc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
