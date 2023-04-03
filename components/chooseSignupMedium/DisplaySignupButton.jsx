import { Box, Image } from "@chakra-ui/react";
import ChooseSignupMedium from "./ChooseSignupMedium";

const DisplaySignupBtn = ({}) => {
  return (
    <>
      <ChooseSignupMedium
        src="/utils/Common/email.svg"
        optionsText="Sign up with Email"
        onclickfunc={"emailAuth"}
      />
      <Image src="/utils/Common/OR.svg" alt="or_logo" />
      <ChooseSignupMedium
        src="/utils/Common/apple.svg"
        optionsText="Sign up with Apple"
        onclickfunc={"appleAuth"}
      />

      <Box as="button">
        <ChooseSignupMedium
          src="/utils/Common/google.svg"
          optionsText="Sign up with Google"
          onclickfunc="googleAuth"
        />
      </Box>
    </>
  );
};
export default DisplaySignupBtn;
