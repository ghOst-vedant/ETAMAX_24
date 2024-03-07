// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2aitx5uo5rfE7QggsytPgnmMMEIRCq3o",
  authDomain: "etamax2024.firebaseapp.com",
  projectId: "etamax2024",
  storageBucket: "etamax2024.appspot.com",
  messagingSenderId: "766200945834",
  appId: "1:766200945834:web:96c193ff3103f91a94c4d3",
  measurementId: "G-49WTLDKMYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
