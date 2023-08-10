// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg15dvm2XwWjCVGy9kjEp58L8jT3LgLb4",
  authDomain: "miniblog-react-5ff93.firebaseapp.com",
  projectId: "miniblog-react-5ff93",
  storageBucket: "miniblog-react-5ff93.appspot.com",
  messagingSenderId: "242335505118",
  appId: "1:242335505118:web:b31cbb5b3a89a2a061c04f",
  measurementId: "G-YPC7C1K9GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);
export {db};