import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDrPIssJM79Kfz-6mUpQFiQBi4AgNmpkJU",
    authDomain: "rider-68b71.firebaseapp.com",
    projectId: "rider-68b71",
    storageBucket: "rider-68b71.appspot.com",
    messagingSenderId: "77186880323",
    appId: "1:77186880323:web:e5b37586822163b356d5f6"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
