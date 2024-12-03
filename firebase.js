import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getFirestore,collection, addDoc,doc, setDoc,updateDoc,serverTimestamp,getDoc,arrayUnion,getDocs,query, where,orderBy } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup,updateProfile,signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAdsspVtb4YQcM4RQIFO2D9r_khMU67WUg",
    authDomain: "hackathon-byjaveriya.firebaseapp.com",
    projectId: "hackathon-byjaveriya",
    storageBucket: "hackathon-byjaveriya.firebasestorage.app",
    messagingSenderId: "42674813463",
    appId: "1:42674813463:web:f2082165fe2e733135ba52"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // const db = getFirestore(app);
  export {auth,signOut,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup,updateProfile,
    // db, serverTimestamp,
    // collection, addDoc,doc, setDoc,updateDoc,getDoc,arrayUnion,getDocs,query, where,orderBy
  }