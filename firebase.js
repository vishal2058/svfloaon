// firebase.js - SFV Loans Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCf8-aeTB5zGPX7zX2JDF367fxWXgpe2EQ",
  authDomain: "svff-6faf4.firebaseapp.com",
  projectId: "svff-6faf4",
  storageBucket: "svff-6faf4.firebasestorage.app",
  messagingSenderId: "549628303741",
  appId: "1:549628303741:web:7cc77ef46f9a67ddbb5414"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;