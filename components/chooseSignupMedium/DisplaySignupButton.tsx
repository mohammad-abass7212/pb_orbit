import { Box, Image } from "@chakra-ui/react";
import type { FC } from "react";
import ChooseSignupMedium from "./ChooseSignupMedium";
interface DisplaySignupButtonProps {}

const DisplaySignupButton: FC<DisplaySignupButtonProps> = ({}) => {
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
export default DisplaySignupButton;
