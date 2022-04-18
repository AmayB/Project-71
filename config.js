import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAhVOGbijVH-0Fe0a0V_IdnhLKaJyEcV7E",
    authDomain: "project-71-f3131.firebaseapp.com",
    projectId: "project-71-f3131",
    storageBucket: "project-71-f3131.appspot.com",
    messagingSenderId: "1007537269370",
    appId: "1:1007537269370:web:8aa15ddbf0bef9a084e9c3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
