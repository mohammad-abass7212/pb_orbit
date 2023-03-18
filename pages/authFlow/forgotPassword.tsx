import CustomText, { variants } from "@/components/Common/CustomText";
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

import React from "react";
interface IAppProps {}

const ForgotPassword: React.FunctionComponent<IAppProps> | any = () => {
  const setEmail = () => {};
  const setUsername = () => {};
  const setPassword = () => {};
  const setConfirmPassword = () => {};
  const handleSubmit = () => {};
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <Box
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["170px", "400px", "400px", "40px", "40px"]}
      position="relative"
      style={{ height: windowSize.height, width: windowSize.width }}
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
          {/* <Spin> */}
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
        </Box>
        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
        >
          {" "}
          <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
          <Input
            variant="unstyled"
            p="10px"
            color="white"
            border={"none"}
            autoComplete="email"
            required
            placeholder="Enter Address"
            onChange={(e) => setEmail()}
            value={""}
          />
        </Box>
        <Button
          mt="15px"
          bg="#00E276"
          color="white"
          w={["60%", "50%", "45%", "22%"]}
          onClick={() => handleSubmit()}
        >
          Send OTP
        </Button>
        <Box mt={30}>
          <CustomText
            link="/authFlow/userSignin"
            variant={variants.SMALL_HEADING}
            text={"Already have an account?Signin"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
