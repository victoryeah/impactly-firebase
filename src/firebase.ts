import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnynUouc1ztIRuqKMRFTMCrkKjXIsf0i4",
  authDomain: "impactly-todo.firebaseapp.com",
  databaseURL: "https://impactly-todo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "impactly-todo",
  storageBucket: "impactly-todo.appspot.com",
  messagingSenderId: "598641232241",
  appId: "1:598641232241:web:17949e60a07aa55c33ced0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;