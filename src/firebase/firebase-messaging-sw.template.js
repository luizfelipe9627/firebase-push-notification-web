import firebase from "firebase/compat";

importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "<VITE_FIREBASE_API_KEY>",
    authDomain: "<VITE_FIREBASE_AUTH_DOMAIN>",
    projectId: "<VITE_FIREBASE_PROJECT_ID>",
    storageBucket: "<VITE_FIREBASE_STORAGE_BUCKET>",
    messagingSenderId: "<VITE_FIREBASE_MESSAGING_SENDER_ID>",
    appId: "<VITE_FIREBASE_APP_ID>"
});

firebase.messaging();
