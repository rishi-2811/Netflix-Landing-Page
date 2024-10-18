import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCg2BBEDh3O33NRRF3l7GK6MNhxJt6NiPM",
    authDomain: "sasta-netflix-b1274.firebaseapp.com",
    projectId: "sasta-netflix-b1274",
    storageBucket: "sasta-netflix-b1274.appspot.com",
    messagingSenderId: "239139405586",
    appId: "1:239139405586:web:e98dd043244dd9415f3dcb",
    measurementId: "G-CN9JCV97JW"
  };

const firebase=initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase}}>
        <App/>
    </FirebaseContext.Provider>
 
);
