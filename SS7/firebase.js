// Setup firebase

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlYJqAhR0ZImsxumpDN6_BVg1MCqpgsHc",
  authDomain: "nps-jsi15-hb.firebaseapp.com",
  projectId: "nps-jsi15-hb",
  storageBucket: "nps-jsi15-hb.appspot.com",
  messagingSenderId: "684179451794",
  appId: "1:684179451794:web:3dbb867d1b8ec958c3db4b",
  measurementId: "G-882YF1EDGQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

