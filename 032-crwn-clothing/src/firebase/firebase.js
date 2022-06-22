import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoxuiOZpu3QFk_hNMTFMYV_tUQpwYjxbg",
  authDomain: "crown-clothing-db-81dda.firebaseapp.com",
  projectId: "crown-clothing-db-81dda",
  storageBucket: "crown-clothing-db-81dda.appspot.com",
  messagingSenderId: "748145782473",
  appId: "1:748145782473:web:ee7d46056c74880568e718"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});


const auth = getAuth();
const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
}

const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log("error creating the user ", error.message);
        }
    }

    return userDocRef;
}

export {
    signInWithGooglePopup,
    createUserDocumentFromAuth
};