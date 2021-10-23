import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA5GTDrcQZUqMmyH-9d6CbQeLLPhy75pkY",
    authDomain: "noticiame-app.firebaseapp.com",
    projectId: "noticiame-app",
    storageBucket: "noticiame-app.appspot.com",
    messagingSenderId: "671669025871",
    appId: "1:671669025871:web:15d7e2fef0d3b554267e3a"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()