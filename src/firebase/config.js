import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDPUWR6OAAV1LnjLEf6wab4iPW50s503ZY",
    authDomain: "viajes-cano.firebaseapp.com",
    projectId: "viajes-cano",
    storageBucket: "viajes-cano.appspot.com",
    messagingSenderId: "793562914708",
    appId: "1:793562914708:web:6794b97506c9e419633981"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)