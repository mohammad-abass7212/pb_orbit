import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqcKIAnP332ethRG3gifA4cWaI8kW7bgs",
  authDomain: "pborbit-dev.firebaseapp.com",
  projectId: "pborbit-dev",
  storageBucket: "pborbit-dev.appspot.com",
  messagingSenderId: "15296105474",
  appId: "1:15296105474:web:3ca8cb5c0a0df87719eb1b",
  measurementId: "G-M51YLV2DZ4",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
