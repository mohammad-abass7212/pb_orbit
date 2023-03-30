import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Button,
  useToast,
  Text,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  InputLeftElement,
} from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";
import { validate } from "../adminAuth/validator/SignUpFormValidator";
import { useSignUp } from "../adminAuth/adminStateManager/adminUseReducer";
import { useRouter } from "next/dist/client/router";
import CustomButton from "@/components/CustomButton";
import Loader from "@/components/Animations/Loader";
import Notification from "@/components/Dailogbox/Notifications";
import CustomText, { variants } from "@/components/Common/CustomText";
import AuthFlowLayout from "@/components/layouts/AuthFlowLayout";

const SignupForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const Username = useRef(null);
  const mobileNumberRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const router = useRouter();
  const toast = useToast();

  const {
    error,
    formData,
    isLoading,
    response,
    handleInputChange,
    handleFormSubmit,
  } = useSignUp();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
  const { success, message, id, mobile_number } = response;
  console.log(id);
  if (id !== "undefined") {
    localStorage.setItem("user_id", id);
  }

  //////////////////////////toggle password icon////////////////////////
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (event) => {
    console.log(formData, "hi there formm triggered");
    event.preventDefault();
    const errors = validate(formData);

    errors.email &&
      toast({
        title: "Required field",
        description: errors.email,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });

    errors.password &&
      toast({
        title: "Required field",
        description: errors.password,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    errors.mobile_number &&
      toast({
        title: "Required field",
        description: errors.mobile_number,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    console.log("errors", errors);
    // return
    if (
      Object.keys(errors).length === 0 &&
      formData.password === formData.confirmPassword
    ) {
      handleFormSubmit(event);
    } else if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Required field",
        description: "Confirm password does not match.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Please fill all required fields!",
        description: errors.mobile_number,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    //////////////////////////toggle password icon////////////////////////

    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
      toast({
        title: "Password does not match!",
        description: errors.mobile_number,
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };
  useEffect(()=>{
    localStorage.removeItem("forget-password");
  },[]);
  React.useEffect(() => {
    if (success === true && !undefined) {
      toast({
        title: message,
        description: "Check your email inbox",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      }) && router.push("/authFlow/otp");
    } else if (success === false && !undefined) {
      toast({
        title: "",
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  }, [message, router, success, toast]);

  return (
    <AuthFlowLayout>
      <Box
        height={"1000px"}
        bg="#050017"
        pt={["80px", "120px", "120px", "120px", "100px"]}
        pb={["80px", "200px", "200px", "20px", "120px"]}
        position="relative"
        mt={[-100]}
      >
        <Flex m={"auto"} w={["40%", "40%", "40%", "30%", "20%"]} mb={["20px"]}>
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
        </Flex>
        <Image
          w={["100%", "41%", "41%", "41%", "41%"]}
          position="absolute"
          bottom={["14px", "0px"]}
          src="/utils/Common/bg.png"
          alt="common_backGroundBanner"
        />
        <Flex flexDirection={"column"} alignItems={"center"} gap="20px">
          <Heading color={"white"}>Welcome </Heading>
          <Text color={"white"}>Start with signing up or sign in</Text>

          <Box
            display={"flex"}
            flexDirection={"column"}
            w={["1000px"]}
            className="formi"
            alignItems={"center"}
            gap="10px"
            type="submit"
          >
            <Box
              height={"50px"}
              display={"flex"}
              border={"1px solid white"}
              borderRadius="10px"
              w={["30%", "30%", "30%", "30%"]}
              pl={["55px", "45px", "35px", "30px"]}
            >
              {" "}
              <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
              <Input
                variant={"flushed"}
                focusBorderColor="#00e276"
                errorBorderColor="red.300"
                _placeholder={{ color: "#656565" }}
                type={"tel"}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                p="10px"
                color="white"
                border={"none"}
                size="lg"
                placeholder="Email"
                required
                ref={emailRef}
                autoComplete={"off"}
              />
            </Box>
            <Box
              height={"50px"}
              display={"flex"}
              border={"1px solid white"}
              borderRadius="10px"
              w={["30%", "30%", "30%", "30%"]}
              pl={["55px", "45px", "35px", "30px"]}
            >
              {" "}
              <Image src="/utils/Common/phoneIcon.svg" alt="pborbit_logo" />
              <Input
                _placeholder={{ color: "#656565" }}
                variant={"flushed"}
                focusBorderColor="#00e276"
                type={"tel"}
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleInputChange}
                p="10px"
                color="white"
                border={"none"}
                size="lg"
                placeholder="Mobile Number"
                required
                ref={mobileNumberRef}
              />
            </Box>
            <Box
              display={"flex"}
              border={"1px solid white"}
              borderRadius="10px"
              w={["30%", "30%", "30%", "30%"]}
              pl={["55px", "45px", "35px", "30px"]}
            >
              {" "}
              <Image src="/utils/common/password.svg" alt="pborbit_logo" />
              <Input
                type={passwordShown ? "text" : "password"}
                name="password"
                _placeholder={{ color: "#656565" }}
                variant={"flushed"}
                focusBorderColor="#00e276"
                value={formData.password}
                onChange={handleInputChange}
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
              display={"flex"}
              border={"1px solid white"}
              borderRadius="10px"
              w={["30%", "30%", "30%", "30%"]}
              pl={["55px", "45px", "35px", "30px"]}
            >
              {" "}
              <Image
                src="/utils/common/password.svg"
                alt="pborbit_logo"
                onClick={toggleConfirmPasswordVisibility}
              />
              <Input
                name="confirmPassword"
                _placeholder={{ color: "#656565" }}
                variant={"flushed"}
                focusBorderColor="#00e276"
                onChange={handleInputChange}
                type={confirmPasswordShown ? "text" : "password"}
                p="10px"
                color="white"
                border={"none"}
                size="lg"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                required
              />
              <Image
                src="/utils/common/hide-2.svg"
                alt="pborbit_logo"
                onClick={toggleConfirmPasswordVisibility}
              />
            </Box>

            <CustomButton
              mt={["20px", "15px"]}
              onClick={handleSubmit}
              color="white"
              widthArray={["80%", "50%", "45%", "22%"]}
              text={isLoading ? "Submitting.." : "Sign Up"}
              spinner={isLoading}
              imageSrc=""
              btnDisabled={false}
              buttonBgColor="#00E276"
              customHeight={[]}
              btnBorderRadius={["15px"]}
              mb={[]}
              iconVisStatus={false}
              btnHoverColor=""
              fontSize={[]}
            />
          </Box>
          <Checkbox colorScheme="green" defaultChecked>
            <Text color={"white"}>Player Access</Text>
          </Checkbox>
          <Flex
            flexDirection={["column", "row"]}
            alignItems={["center", "baseline"]}
            justifyContent={["center", "flex-start"]}
            mt={["30px", "40px"]}
          >
            <CustomText
              variant={variants.SMALL_HEADING}
              text={`Already have an account? Sign in`}
              link="/authFlow/userSignin"
            />
          </Flex>
        </Flex>
      </Box>
    </AuthFlowLayout>
  );
};

export default SignupForm;
