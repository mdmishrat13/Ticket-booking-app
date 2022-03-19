import { getAuth,signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged,GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Login/firebase.init";


initializeFirebase();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const createUserWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user=userCredential.user
      })
      
  };
  const emailPasswordSignIn=(email,password)=>{
    console.log("login called")
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user=userCredential.user;
    })
  } 
  const googleSignIn=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ... 
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  }

  useEffect(()=>{
      const unSubscribe=onAuthStateChanged(auth,(user)=>{
          if (user){
              setUser(user);
          }
          else{
              setUser({})
          }
          return ()=>unSubscribe;
      })
  },[])
  const logOut=()=>{
    signOut(auth).then(() => {
      });
  }
  return {
      user,
      createUserWithEmail,
      emailPasswordSignIn,
      logOut,
      googleSignIn
  }
};
export default useFirebase;
