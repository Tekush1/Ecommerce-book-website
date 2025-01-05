// firebase.js or firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import Firebase Auth
import { getFirestore } from "firebase/firestore";  // Import Firestore

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyA29XlIFzU2UFjfxRxLaCKfnA_7mCOswwk",
  authDomain: "login-page-ca796.firebaseapp.com",  // Ensure this is correct
  projectId: "login-page-ca796",
  storageBucket: "login-page-ca796.firebasestorage.app",
  messagingSenderId: "79097728818",
  appId: "1:79097728818:web:73a826b6a78a7a8781112b",
  measurementId: "G-2E6XDSX7SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);  // Initialize Auth correctly
const db = getFirestore(app);  // Initialize Firestore

// Get analytics if needed (optional)
const analytics = getAnalytics(app);

// Export all initialized Firebase services
export { app, analytics, auth, db };
