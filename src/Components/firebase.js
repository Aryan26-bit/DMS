import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdcbXTEKWLDUOolo4tEfeztZAVnVhIfgE",
  authDomain: "document-management-syst-f58bf.firebaseapp.com",
  projectId: "document-management-syst-f58bf",
  storageBucket: "document-management-syst-f58bf.appspot.com",
  messagingSenderId: "772683214749",
  appId: "1:772683214749:web:6a97f52886d58f3a59c974",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
