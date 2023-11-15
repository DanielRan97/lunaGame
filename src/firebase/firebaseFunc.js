import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from './firebase'; // Assuming your firebase.js file exports these functions

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully!');
    return true;
  } catch (error) {
    console.error('Error logging in:', error.message);
    throw new Error("Login failed. Check your internet or try signing up if you didn't create an account.");
  }
};

export const signUpUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(userData => {
            console.log('User signed up successfully!');
            loginUser(email, password);
            console.log(userData)
    });
    return true;
  } catch (error) {
    console.error('Error signing up:', error.message);
    throw new Error("Sign up failed. Check your internet or try logging in if your account already exists.");
  }
};


export const logInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User logged in with Google successfully!', user);
      return true;
    } catch (error) {
      console.error('Error logging in with Google:', error.message);
      throw new Error("Google login failed. Check your internet or try again later.");
    }
  };
