import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyARza3IspYAu4OedZMCC9ORMlKVeH2gSvc",
  authDomain: "todopkist.firebaseapp.com",
  databaseURL: "https:todopkist.firebaseio.com",
  projectId: "todopkist",
  storageBucket: "todopkist.appspot.com",
  messagingSenderId: "121784458783",
  appId: "1:121784458783:web:f57fc1fc3448b8a2807f2a"
});

export { firebaseConfig as firebase };
