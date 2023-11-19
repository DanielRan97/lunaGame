import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  getAdditionalUserInfo 
} from "./firebase";
import { addUser
} from "./firebaseDB";


export let userData = {};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();
    localStorage.setItem("lunaGamesToken", idToken);
    console.log("User logged in successfully!");
    return true;
  } catch (error) {
    console.error("Error logging in:", error.message);
    throw new Error(
      "Login failed. Check your internet or try signing up if you didn't create an account."
    );
  }
};

export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const idToken = await user.getIdToken();
    await addUser({...user}, idToken);
    await loginUser(email, password);
    return true;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw new Error(
      "Sign up failed. Check your internet, try logging in if your account already exists or check your password."
    );
  }
};

export const logInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const idToken = await user.getIdToken();
    localStorage.setItem("lunaGamesToken", idToken);
    const isFirstLogin = await getAdditionalUserInfo(result).isNewUser;
    if(isFirstLogin){
      await addUser({...user}, idToken);
    }
    return true;
  } catch (error) {
    throw new Error(
      "Google login failed. Check your internet or try again later."
    );
  }
};

export const logout = (() => {
  signOut(auth).then(() => {
    localStorage.removeItem('lunaGamesToken');
    console.log('logout success');
  }).catch((error) => {
    console.error('logout failed', error);
  });})

  var actionCodeSettings = {
    url: 'http://localhost:3000/log',
    handleCodeInApp: true
  };

  export const resetPasswordMail = async (email) => {

    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);

    } catch (error) {
      throw new Error(
        'Failed to send reset password mail. Check your internet connection or try signing up.'
      );
    }
  };

