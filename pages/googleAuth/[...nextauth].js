import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../../firebase";

const auth = getAuth(firebaseApp);

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const googleCredential = GoogleAuthProvider.credential(
        account.accessToken
      );
      await auth.signInWithCredential(googleCredential);
      return true;
    },
  },
});
