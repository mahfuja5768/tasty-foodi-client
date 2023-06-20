// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5o98mY3yQqrRkO7Cg-ayQ65UY-zR8400",
  authDomain: "tastyfoodi.firebaseapp.com",
  projectId: "tastyfoodi",
  storageBucket: "tastyfoodi.appspot.com",
  messagingSenderId: "636168603515",
  appId: "1:636168603515:web:cf31f246c444f0f904dfde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;