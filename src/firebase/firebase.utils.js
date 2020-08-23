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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;