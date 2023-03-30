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
import { AdminLoginCaller } from "../adminAuth/adminStateManager/adminAuth";
import { useRouter } from "next/router";
// interface ISigninProps {}
const UserSignIn = () => {
  const router=useRouter()
  const toast = useToast();
  const [userDetails, setUserDetails] = useState({});
  const [password, setPassword] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    formData,
    isLoading,
    error,
    response,
    // handleLoginInput,
    handleLoginSubmit,
  } = USE_LOGIN();
  const [passwordShown, setPasswordShown] = React.useState(false);

  const { success, message } = response;
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLoginInput = (event) => {
    const { value, name } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  useEffect(() => {
    localStorage.removeItem("forget-password");
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(userDetails, "userDetails");
    const errors = LoginFormValidate(userDetails);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      // handleLoginSubmit(event);
      const response = await AdminLoginCaller(userDetails);
      if (response?.success) {
        toast({
          title: "Logged In successfully!",
          description: response?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          router.push("/community");
        }, 2000);
      } else {
        toast({
          title: response.message,
          description: errors.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
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
  };
  // console.log(response);

  // React.useEffect(() => {
  //   {
  //     success === true && !undefined
  //       ? toast({
  //           title: "logged In successfully!",
  //           description: message,
  //           status: "success",
  //           duration: 9000,
  //           isClosable: true,
  //           position: "top",
  //         }) &&
  //         setTimeout(() => {
  //           router.push("/community");
  //         }, 2000)
  //       : null;
  //   }
  //   {
  //     success === false && !undefined
  //       ? toast({
  //           title: "",
  //           // description: message,
  //           status: "error",
  //           duration: 9000,
  //           isClosable: true,
  //           position: "top",
  //         })
  //       : null;
  //   }
  // });
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
      pb={["450px", "640px", "800px", "300px", "360px"]}
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
      <Image width="150px" src="/utils/common/logo.png" alt="pborbit_logo" />
      <Heading color={"white"}>Welcome Back</Heading>
      <Text color={"white"}>Start with signing up or sign in</Text>

      <Box
        display={"flex"}
        border={"1px solid white"}
        borderRadius="10px"
        w={["60%", "50%", "45%", "22%"]}
        pl="10px"
      >
        {" "}
        <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
        <Input
          variant={"flushed"}
          focusBorderColor="#00e276"
          errorBorderColor="red.300"
          _placeholder={{ color: "#656565" }}
          type={"text"}
          name="username"
          value={userDetails.username}
          onChange={handleLoginInput}
          p="10px"
          color="white"
          border={"none"}
          size="lg"
          placeholder="Username"
          required
          useref={usernameRef}
          autoComplete={"off"}
        />
      </Box>

      <Box
        display={"flex"}
        border={"1px solid white"}
        borderRadius="10px"
        w={["60%", "50%", "45%", "22%"]}
        pl="10px"
      >
        {" "}
        <Image src="/utils/common/password.svg" alt="pborbit_logo" />
        <Input
          name="password"
          useref={passwordRef}
          type={passwordShown ? "text" : "password"}
          _placeholder={{ color: "#656565" }}
          variant={"flushed"}
          focusBorderColor="#00e276"
          value={userDetails.password}
          onChange={handleLoginInput}
          p="10px"
          color="white"
          border={"none"}
          size="lg"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <Image
          src="/utils/common/hide-2.svg"
          alt="pborbit_logo"
          onClick={togglePasswordVisibility}
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
        <Link href={"/authFlow/forgotPassword"}>
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
