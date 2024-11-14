import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcTdqiVyRB5CEZ3IOPVsLqUwEDCYc3qc8",
  authDomain: "vue-pet-bank.firebaseapp.com",
  databaseURL: "https://vue-pet-bank-default-rtdb.firebaseio.com",
  projectId: "vue-pet-bank",
  storageBucket: "vue-pet-bank.firebasestorage.app",
  messagingSenderId: "480816607974",
  appId: "1:480816607974:web:7eed60e6ce0d0cdf61c127"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }
