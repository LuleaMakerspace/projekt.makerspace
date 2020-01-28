import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

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

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()

export const projectCollection = StoreDB.collection("projects")

export default firebase