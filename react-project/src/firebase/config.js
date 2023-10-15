// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpQGm4KZV9t_o0eoOrW2nfppLvqMo1DoY",
  authDomain: "react-coderhouse-e9c4a.firebaseapp.com",
  projectId: "react-coderhouse-e9c4a",
  storageBucket: "react-coderhouse-e9c4a.appspot.com",
  messagingSenderId: "814822234814",
  appId: "1:814822234814:web:e8af57674bfe30a3fd9cef",
  measurementId: "G-RE79JDX5YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);