// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWD97RmWcIR7Z_AtkJcSdalPa66TELws",
  authDomain: "toy-paragon.firebaseapp.com",
  projectId: "toy-paragon",
  storageBucket: "toy-paragon.appspot.com",
  messagingSenderId: "287430454955",
  appId: "1:287430454955:web:c5ef78434ee70dbd2b51ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;