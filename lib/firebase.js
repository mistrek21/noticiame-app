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

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore()
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment

// Storage exports
export const storage = firebase.storage()
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

// Helper functions
// GEts a users/{uid} doc with username
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }

// Converts a firestore to JSON

export function postToJSON(doc) {
    const data = doc.data()
    return {
        ...data,
        // firestore timestamp NOT serializable to JSON
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    }
}