// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  getFirestore,
  query,
  where,
  limit,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyAqu-VZx_WXqmOweFLsJYE9o1Nuwkv42z8",

  authDomain: "san-lorenzo-ruiz-landing.firebaseapp.com",

  projectId: "san-lorenzo-ruiz-landing",

  storageBucket: "san-lorenzo-ruiz-landing.appspot.com",

  messagingSenderId: "325442275001",

  appId: "1:325442275001:web:993d2be7d810e27087bd68",

  measurementId: "G-NHYYRF7W4H"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

// export const db = getFirestore(app);
// export const auth = getAuth(app);

// export const provider = new GoogleAuthProvider();

