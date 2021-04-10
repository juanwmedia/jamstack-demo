import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: "jamstack-demo-83cf8.firebaseapp.com",
  projectId: "jamstack-demo-83cf8",
  storageBucket: "jamstack-demo-83cf8.appspot.com",
  messagingSenderId: "1083921056803",
  appId: "1:1083921056803:web:a36b5fe801a305d55cdd96",
};

!firebase.apps.length ? firebase.initializeApp(config) : "";
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
