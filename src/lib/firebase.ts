// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbta9Dty6gn9pXGrNfN0dpHyeZTvDksVs",
  authDomain: "sveltetest-eea62.firebaseapp.com",
  projectId: "sveltetest-eea62",
  storageBucket: "sveltetest-eea62.firebasestorage.app",
  messagingSenderId: "773295116913",
  appId: "1:773295116913:web:5fb43fac03f15a894201d0",
  measurementId: "G-Z530WVTBR9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();