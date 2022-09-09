// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA8XWs_lbzuspQb9-oZsRiM81Bl3RcOZxg",
  authDomain: "servir-ea-sa-project.firebaseapp.com",
  projectId: "servir-ea-sa-project",
  storageBucket: "servir-ea-sa-project.appspot.com",
  messagingSenderId: "590878474310",
  appId: "1:590878474310:web:f71f4999690580d7b70a47",
  measurementId: "G-5G8FB6WB10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);