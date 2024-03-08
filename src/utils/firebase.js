// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFONn7wyoveM7xplv287FUXw53f0_2dhU",
  authDomain: "aswin-netfilx-gpt-111299.firebaseapp.com",
  projectId: "aswin-netfilx-gpt-111299",
  storageBucket: "aswin-netfilx-gpt-111299.appspot.com",
  messagingSenderId: "304719339221",
  appId: "1:304719339221:web:6c052a5ac4a2f05b5f8c5c",
  measurementId: "G-HPX3X3YK5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
