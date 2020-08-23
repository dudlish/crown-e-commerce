import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('GGGJCcNAUwtb16SH3cZv').collection('cartItems').doc('TcoLH4M4eIkoLIIfmmJO');

firestore.doc('/users/GGGJCcNAUwtb16SH3cZv/cartItems/TcoLH4M4eIkoLIIfmmJO');
firestore.collection('/users/GGGJCcNAUwtb16SH3cZv/cartItems');
