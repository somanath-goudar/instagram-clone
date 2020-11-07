import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLHY-NY9QjTOAwB5AoIkjx4UPwAnH3Uo4",
    authDomain: "instagram-clone2-b0083.firebaseapp.com",
    databaseURL: "https://instagram-clone2-b0083.firebaseio.com",
    projectId: "instagram-clone2-b0083",
    storageBucket: "instagram-clone2-b0083.appspot.com",
    messagingSenderId: "237698171216",
    appId: "1:237698171216:web:3411df024c6f172e336c55",
    measurementId: "G-ZV10VZX3XV"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db , auth, storage};
