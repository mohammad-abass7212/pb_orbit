import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

// Inside AuthProvider
export const login = () => {
  console.log("process auth domain", process.env.AUTH_DOMAIN);
  console.log("in oauth2");
  const provider = new GoogleAuthProvider();
  console.log("provider...", provider);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log({ credential, token, user });
      const idToken = credential?.idToken;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential });
    });
};

const logout = () => {
  auth.signOut();
  console.log("logout");
};
