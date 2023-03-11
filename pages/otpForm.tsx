import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import ChooseSignupMedium from "@/components/chooseSignupMedium/ChooseSignupMedium";
import DisplayButton from "@/components/chooseSignupMedium/DisplaySignupButton";
import CustomText, { variants } from "@/components/Common/CustomText";
import OtpAsset from "@/components/OtpInput/OtpAsset";
interface IAppProps {}

const OtpForm: React.FunctionComponent<IAppProps> | any = () => {
  const setEmail = () => {};
  const setPassword = () => {};
  const updatePassword = () => {};
  const setConfirmPassword = () => {};
  const handleSubmit = () => {};

  return (
    <Box
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["170px", "400px", "400px", "40px", "40px"]}
      position="relative"
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Box
          w={["40%", "40%", "40%", "30%", "20%"]}
          mb={["73px", "73px", "73px", "40px", "57px"]}
        >
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
        </Box>
        <OtpAsset />
        <Box mt={30}>
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Already have an account?Signin"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default OtpForm;
