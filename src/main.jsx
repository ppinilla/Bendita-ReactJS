import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYn6F1ffS9pTm_tyza71eCxwJvv0nI-eg",
  authDomain: "bendita-react.firebaseapp.com",
  projectId: "bendita-react",
  storageBucket: "bendita-react.appspot.com",
  messagingSenderId: "1051667180782",
  appId: "1:1051667180782:web:abc2788dc3cb774db1d7ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
