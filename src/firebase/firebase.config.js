import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA15EEc7vYOXzd8ZR-Q81zLadj-J3niLlw",
  authDomain: "coffee-store-auth-8d09a.firebaseapp.com",
  projectId: "coffee-store-auth-8d09a",
  storageBucket: "coffee-store-auth-8d09a.firebasestorage.app",
  messagingSenderId: "856641759678",
  appId: "1:856641759678:web:4dc32633e174ee723ff1ef"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);