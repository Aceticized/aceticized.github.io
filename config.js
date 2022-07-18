// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9wD1CM9oeEJzkLvuAS1ITmjnMBUSF2OY",
  authDomain: "itutordatabase.firebaseapp.com",
  projectId: "itutordatabase",
  storageBucket: "itutordatabase.appspot.com",
  messagingSenderId: "847034691881",
  appId: "1:847034691881:web:0b6346aa4f17a0c364c738",
  measurementId: "G-QZGTXF259S"
};

// Initialize Firebase


function connect() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    alert("yes")
}

