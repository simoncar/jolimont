import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAbCADtQsj1lTQWD1pfaOMi-WHUGkRFTXw",
  authDomain: "calendar-app-57e88.firebaseapp.com",
  databaseURL: "https://calendar-app-57e88.firebaseio.com",
  projectId: "calendar-app-57e88",
  storageBucket: "calendar-app-57e88.appspot.com",
  messagingSenderId: "991350571487",
  appId: "1:991350571487:web:64e8030d8ad0c20969c46a",
};
// Initialize Firebase

console.log("firebase is initialised ");
firebase.initializeApp(config);
firebase.auth().signInAnonymously();

export default firebase;
