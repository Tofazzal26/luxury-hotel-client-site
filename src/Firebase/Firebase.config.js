// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxKr6LyR81hLbkZCXgWpGH5eTIPy6QFDI",
  authDomain: "organic-foods-59169.firebaseapp.com",
  projectId: "organic-foods-59169",
  storageBucket: "organic-foods-59169.appspot.com",
  messagingSenderId: "596584196852",
  appId: "1:596584196852:web:5c9a59590afbc89733cca1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
