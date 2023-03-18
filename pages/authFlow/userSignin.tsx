import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { USE_LOGIN } from "../adminAuth/adminStateManager/adminUseReducer";
import { LoginFormValidate } from "../adminAuth/validator/LoginFormValidator";
import CustomText, { variants } from "@/components/Common/CustomText";
interface ISigninProps {}
const UserSignIn: React.FunctionComponent<ISigninProps> | any = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);

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
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
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

      <CustomText
        variant={variants.SMALL_HEADING}
        text="Don’t have an account? SignUp"
        link="/authFlow/ChooseSignup"
      />
    </Flex>
  );
};
export default UserSignIn;
