// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfp3KyGVoLn7oxY0YDF4Ow5IhwxJElVqU",
  authDomain: "ecommerce-react-c3a4b.firebaseapp.com",
  projectId: "ecommerce-react-c3a4b",
  storageBucket: "ecommerce-react-c3a4b.appspot.com",
  messagingSenderId: "1010987140615",
  appId: "1:1010987140615:web:132f16739e62ab00610ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp= () =>{
    return app;
}