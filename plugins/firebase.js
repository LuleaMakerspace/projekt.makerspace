const firebase = require("firebase/app");
require("firebase/firestore");


let firebaseConfig = {
    apiKey: "AIzaSyA548KWiSE_ixSYamZqhhMWWHQhmZm_130",
    authDomain: "makerspace-projekt.firebaseapp.com",
    databaseURL: "https://makerspace-projekt.firebaseio.com",
    projectId: "makerspace-projekt",
    storageBucket: "makerspace-projekt.appspot.com",
    messagingSenderId: "114081140462",
    appId: "1:114081140462:web:69387adf89df65c6162dff",
    measurementId: "G-6GJ4VF6YZ3"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()

export const projectCollection = db.collection("projects")