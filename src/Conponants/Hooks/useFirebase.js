import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Login/firebase.init";

initializeFirebase();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading]= useState(false);
  const [error,setError]= useState('')
  const auth = getAuth();

  const createUserWithEmail = (email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    // ..
  })
  .finally(setLoading(false));
  };
  const emailPasswordSignIn = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(setLoading(false));
  };
  const googleSignIn = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        setError(errorMessage)
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(setLoading(false));
  };

  useEffect(() => {
    setLoading(true)
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false)
      return () => unSubscribe;
    });
  }, []);
  const logOut = () => {
    setLoading(true)
    signOut(auth).then(() => {});
    setLoading(false)
  };
  return {
    user,
    createUserWithEmail,
    emailPasswordSignIn,
    logOut,
    googleSignIn,
  };
};
export default useFirebase;
