import OTPBox from "@/components/OtpBox";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { LoginFormValidate } from "../pages/adminAuth/validator/LoginFormValidator";
import Link from "next/link";
import { useRef } from "react";
import { USE_LOGIN } from "./adminAuth/adminStateManager/adminUseReducer";
import React from "react";
interface ISigninProps {}
const Signin: React.FunctionComponent<ISigninProps> | any = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { formData, isLoading, error, handleLoginInput, handleLoginSubmit } =
    USE_LOGIN();

  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = LoginFormValidate(formData);
    if (Object.keys(errors).length === 0) {
      handleLoginSubmit(event);
    } else {
      alert("Please fill all required fields!");
    }
    handleLoginSubmit(event);
  };
  return (
    <Flex
      bg="#050017"
      pt={["166px", "200px", "200px", "200px", "100px"]}
      pb={["110px", "400px", "400px", "40px", "140px"]}
      position="relative"
      flexDirection={"column"}
      alignItems={"center"}
      gap="10px"
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
          variant="unstyled"
          p="10px"
          color="white"
          border={"none"}
          autoComplete="email"
          required
          placeholder="Enter Address or email"
          onChange={handleLoginInput}
          value={emailRef.current?.value}
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
          variant="unstyled"
          p="10px"
          color="white"
          border={"none"}
          type="password"
          autoComplete="new-password"
          required
          placeholder="password"
          onChange={handleLoginInput}
          value={passwordRef.current?.value}
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
        mt="15px"
        bg="#00E276"
        color="white"
        w={["60%", "50%", "45%", "22%"]}
        type={"submit"}
        onClick={() => handleLogin}
      >
        Login
      </Button>
      <Text mt="119px" color="white">
        <Link href="/signupForm">Don’t have an account? SignUp</Link>
      </Text>
    </Flex>
  );
};

export default Signin;
