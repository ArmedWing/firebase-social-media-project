// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// const firebaseConfig = {
//     apiKey: (`${process.env.REACT_APP_API_KEY}`),
//     authDomain: (`${process.env.REACT_APP_AUTH_DOMAIN}`),
//     projectId: (`${process.env.REACT_APP_PROJECT_ID}`),
//     storageBucket: (`${process.env.REACT_APP_STORAGE_BUCKET}`),
//     messagingSenderId: (`${process.env.REACT_APP_MESSAGING_SENDER_ID}`),
//     appId: (`${process.env.REACT_APP_APP_ID }`)
//   };

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
export const db = getFirestore(app)