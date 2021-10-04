import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as signOutFB} from "firebase/auth"
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAb00OMNWEjAgUFhvyC3yG2VGDwP-U4tXo",
  authDomain: "gb---chatapp.firebaseapp.com",
  databaseURL: "https://gb---chatapp-default-rtdb.firebaseio.com",
  projectId: "gb---chatapp",
  storageBucket: "gb---chatapp.appspot.com",
  messagingSenderId: "384410603063",
  appId: "1:384410603063:web:eb0bdffb5ecb0361ad79b2"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
}

export const signOut = async () => {
    await signOutFB(auth);
} 