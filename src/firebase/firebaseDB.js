import axios from 'axios';

export const addUser = async (user, idToken) => {
  let userData = {
    "accessToken": user.accessToken,
    "displayName": user.displayName,
    "email": user.email,
    "emailVerified": user.emailVerified,
    "isAnonymous": user.isAnonymous,
    "phoneNumber": user.phoneNumber,
    "photoURL": user.photoURL,
    "uid": user.uid,
    "createdAt": user.metadata.createdAt,
    "creationTime": user.metadata.creationTime,
    "lastLoginAt": user.metadata.lastLoginAt,
    "lastSignInTime": user.metadata.lastSignInTime,
    "token" : idToken
  };

  try {
    await axios.post(process.env.REACT_APP_FIREBASE_API + '/users.json', userData);
    console.log('add new user success');

  } catch (error) {
    console.error('Error adding new user');
  }
}

