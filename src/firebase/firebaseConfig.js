import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFJY4Kz0b5AT7nT2jke7tex2eeCasbCOU",
  authDomain: "products-9a666.firebaseapp.com",
  projectId: "products-9a666",
  storageBucket: "products-9a666.appspot.com",
  messagingSenderId: "693790091754",
  appId: "1:693790091754:web:12d12e7489b0270298ea93",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);