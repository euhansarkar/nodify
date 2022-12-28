// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm-6NYaJnHyAx5tP6ybUbk5F4MMl4paNw",
  authDomain: "nodify-32ec9.firebaseapp.com",
  projectId: "nodify-32ec9",
  storageBucket: "nodify-32ec9.appspot.com",
  messagingSenderId: "173086516705",
  appId: "1:173086516705:web:1c9f9347eda75246bc9ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;