// import { auth } from "@/firebase";
import { Box, Image } from "@chakra-ui/react";
// import { signInWithPopup } from "@firebase/auth";
// import { GoogleAuthProvider} from "@firebase/auth-types";
import type { FC } from "react";
import ChooseSignupMedium from "./ChooseSignupMedium";

interface DisplaySignupButtonProps {}

const DisplaySignupButton: FC<DisplaySignupButtonProps> = ({}) => {
  // const Provider = new GoogleAuthProvider();
  // const handleGoogleSignIn = async () => {
  //   await signInWithPopup(auth, Provider);
  // };
  return (
    <>
      <ChooseSignupMedium
        src="/utils/Common/email.svg"
        optionsText="Sign up with Email"
      />
      <Image src="/utils/Common/OR.svg" alt="or_logo" />
      <ChooseSignupMedium
        src="/utils/Common/apple.svg"
        optionsText="Sign up with Apple"
      />

      <Box as="button">
        <ChooseSignupMedium
          src="/utils/Common/google.svg"
          optionsText="Sign up with Google"
        />
      </Box>
    </>
  );
};
export default DisplaySignupButton;
