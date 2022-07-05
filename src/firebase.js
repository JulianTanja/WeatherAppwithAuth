// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo6SG1REdDvCq27puEAnz8eufQraWaCUk",
  authDomain: "fir-1-3d619.firebaseapp.com",
  projectId: "fir-1-3d619",
  storageBucket: "fir-1-3d619.appspot.com",
  messagingSenderId: "119960040039",
  appId: "1:119960040039:web:4a0d927267f7e3e8861ac2",
  measurementId: "G-H23KPRTKWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);

export default app