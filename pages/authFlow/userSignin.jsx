import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { USE_LOGIN } from "../adminAuth/adminStateManager/adminUseReducer";
import { LoginFormValidate } from "../adminAuth/validator/LoginFormValidator";
import CustomText, { variants } from "@/components/Common/CustomText";
import { useClickAnimation } from "@/components/useClickAnimation";
// interface ISigninProps {}
const UserSignIn = () => {
  const toast = useToast();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    updateWindowSize();
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    formData,
    isLoading,
    error,
    response,
    handleLoginInput,
    handleLoginSubmit,
  } = USE_LOGIN();
  const [passwordShown, setPasswordShown] = React.useState(false);

  const { success, message } = response;
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const errors = LoginFormValidate(formData);
    if (Object.keys(errors).length === 0) {
      handleLoginSubmit(event);
    } else {
      toast({
        title: "credentials are wrongs!",
        description: errors.message,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    handleLoginSubmit(event);
  };

  React.useEffect(() => {
    {
      success === true && !undefined
        ? toast({
            title: "logged In successfully!",
            description: message,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          }) &&
          setTimeout(() => {
            router.push("/community");
          }, 2000)
        : null;
    }
    {
      success === false && !undefined
        ? toast({
            title: "",
            description: message,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
          })
        : null;
    }
  });
  const buttonRef = useRef(null);
  useClickAnimation(buttonRef, {
    size: 100,
    duration: 1000,
    color: "red",
    effectName: "ripple",
  });
  return (
    <Flex
      id="usersigninpage"
      bg="#050017"
      pt={["166px", "200px", "200px", "200px", "100px"]}
      pb={["110px", "400px", "400px", "40px", "140px"]}
      position="relative"
      flexDirection={"column"}
      alignItems={"center"}
      gap="10px"
      style={{ height: windowSize.height, width: windowSize.width }}
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        left={"0px"}
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      {/* <Flex border={'1px solid red'} flexDirection={'column'} alignItems={'center'} gap="10px"> */}
      <Image width="150px" src="/utils/common/logo.png" alt="pborbit_logo" />
      <Heading color={"white"}>Welcome Back</Heading>
      <Text color={"white"}>Start with signing up or sign in</Text>

      <Box
        display={"flex"}
        border={"1px solid white"}
        borderRadius="5px"
        w={["60%", "50%", "45%", "22%"]}
        pl="10px"
      >
        {" "}
        <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
        <Input
          name="username"
          variant="unstyled"
          p="10px"
          color="white"
          border={"none"}
          autoComplete="email"
          required
          useref={usernameRef}
          placeholder="Enter Address or email"
          onChange={handleLoginInput}
          value={formData.username}
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
        <Image
          src="/utils/common/password.svg"
          alt="pborbit_logo"
          onClick={togglePasswordVisibility}
        />
        <Input
          name="password"
          useref={passwordRef}
          variant="unstyled"
          p="10px"
          color="white"
          border={"none"}
          type="password"
          autoComplete="new-password"
          required
          placeholder="password"
          onChange={handleLoginInput}
          value={formData.password}
        />
      </Box>
      <Box
        w={["60%", "50%", "45%", "22%"]}
        fontSize={["8px", "10px", "10px", "10px"]}
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Checkbox color="white" size="sm">
          Remember me
        </Checkbox>
        <Link href={"/resetPassword"}>
          <Text color="white" fontSize={["8px", "12px", "12px", "12px"]}>
            Forgot Password ?
          </Text>
        </Link>
      </Box>

      <Button
        ref={buttonRef}
        mt="15px"
        bg="#00E276"
        color="white"
        w={["60%", "50%", "45%", "22%"]}
        type={"submit"}
        onClick={handleLogin}
      >
        Login
      </Button>

      <CustomText
        variant={variants.SMALL_HEADING}
        text="Don’t have an account? SignUp"
        link="/authFlow/ChooseSignup"
      />
    </Flex>
  );
};
export default UserSignIn;
