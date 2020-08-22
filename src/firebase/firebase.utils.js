import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAnEoKcso_M3GClpqr4_NGrRIW44epM4fk",
    authDomain: "crown-e-commerce-e6cfe.firebaseapp.com",
    databaseURL: "https://crown-e-commerce-e6cfe.firebaseio.com",
    projectId: "crown-e-commerce-e6cfe",
    storageBucket: "crown-e-commerce-e6cfe.appspot.com",
    messagingSenderId: "538580493117",
    appId: "1:538580493117:web:ce0df498d08f5efd51db54"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;