import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyBA9X59ddIBqi0nZuTes47MLSTAnFToVRo",
  authDomain: "hcigatorcom.firebaseapp.com",
  projectId: "hcigatorcom",
  storageBucket: "hcigatorcom.appspot.com",
  messagingSenderId: "484162661935",
  appId: "1:484162661935:web:75053600540920682e20da",
  measurementId: "G-W20Y0VPBZY",
};
export default firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const functions = firebase.functions();
