import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wjlDD7EZOXxMrZZKxhd1UTclpzTzGPc",
  authDomain: "farm-verse-fb5ec.firebaseapp.com",
  projectId: "farm-verse-fb5ec",
  storageBucket: "farm-verse-fb5ec.appspot.com",
  messagingSenderId: "7421195842",
  appId: "1:7421195842:web:bf4b67ff4897bf1b9edfdb",
  measurementId: "G-FMR5S9Q013",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
