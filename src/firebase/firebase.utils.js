import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDfvtboFGmW4WqBq6k5Bqtxw3gxa1OZkPU",
	authDomain: "crwn-clothing-db-f823d.firebaseapp.com",
	databaseURL: "https://crwn-clothing-db-f823d.firebaseio.com",
	projectId: "crwn-clothing-db-f823d",
	storageBucket: "crwn-clothing-db-f823d.appspot.com",
	messagingSenderId: "114419226732",
	appId: "1:114419226732:web:42dfb1a7d73080dde6a049",
	measurementId: "G-JLG36FVV75"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;