// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfNNdLiChA5wrfy-M-_9vQGdfJZA9_KMs",
  authDomain: "fir-social-media-44517.firebaseapp.com",
  projectId: "fir-social-media-44517",
  storageBucket: "fir-social-media-44517.appspot.com",
  messagingSenderId: "461852028791",
  appId: "1:461852028791:web:e13e934357d21c6a927b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()