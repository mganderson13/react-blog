import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9BS1DQ70sCpTk1LN5VfyvHwZLQI44Kq0",
  authDomain: "react-blog-dcfc9.firebaseapp.com",
  projectId: "react-blog-dcfc9",
  storageBucket: "react-blog-dcfc9.appspot.com",
  messagingSenderId: "807247465439",
  appId: "1:807247465439:web:19f2a98c46baa5a221526a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
