import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Button,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { validate } from "../adminAuth/validator/SignUpFormValidator";
import { useSignUp } from "../adminAuth/adminStateManager/adminUseReducer";
import { useRouter } from "next/dist/client/router";
import CustomButton from "@/components/CustomButton";
import Loader from "@/components/Animations/Loader";
import Notification from "@/components/Dailogbox/Notifications";
import CustomText, { variants } from "@/components/Common/CustomText";
import ResizableContainer from "@/components/resizablepages";
interface ISignupProps {}

const SignupForm: React.FC<ISignupProps> = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const Username = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const {
    formData,
    isLoading,
    error,
    handleInputChange,
    handleFormSubmit,
    // response,
  } = useSignUp();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
  const [showNotification, setShowNotification] = useState(false);
  // const { success, message } = response;

  useEffect(() => {
    setShowNotification(true);
  }, []);
  //////////////////////////toggle password icon////////////////////////
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (event: any) => {
    console.log("hi there formm triggered");
    event.preventDefault();
    const errors = validate(formData);

    if (Object.keys(errors).length === 0) {
      handleFormSubmit(event);
      router.push("/authFlow/otpForm");
    } else {
      alert("Please fill all required fields!");
    }
    //////////////////////////toggle password icon////////////////////////

    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
    }
  };
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
  return (
    <ResizableContainer>
    <Box
      bg="#050017"
      pt={["80px", "120px", "120px", "120px", "100px"]}
      pb={["80px", "200px", "200px", "20px", "120px"]}
      position="relative"
      mt={[-100]}
    >
      <Flex
        m={"auto"}
        w={["40%", "40%", "40%", "30%", "20%"]}
        mb={["73px", "73px", "73px", "40px", "57px"]}
      >
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
          as="form"
          display={"flex"}
          flexDirection={"column"}
          w={["1000px"]}
          className="formi"
          alignItems={"center"}
          gap="10px"
          type="submit"
          onsubmit={handleSubmit}
        >
          <Box
            display={"flex"}
            border={"1px solid white"}
            borderRadius="5px"
            w={["80%", "60%", "50%", "25%"]}
            pl="10px"
          >
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              p="10px"
              color="white"
              border={"none"}
              placeholder="Enter Address"
              ref={emailRef}
            />
          </Box>
          <Box
            display={"flex"}
            border={"1px solid white"}
            borderRadius="5px"
            w={["80%", "60%", "50%", "25%"]}
            pl="10px"
            pr="10px"
          >
            {" "}
            <Image src="/utils/Common/at.svg" alt="userIcon" />
            <Input
              name="User Name"
              onChange={handleInputChange}
              type={"Text"}
              p="10px"
              color="white"
              border={"none"}
              placeholder="Username"
              ref={Username}
              required
            />
          </Box>
          <Box
            display={"flex"}
            border={"1px solid white"}
            borderRadius="5px"
            w={["80%", "60%", "50%", "25%"]}
            pl="10px"
          >
            {" "}
            <Image src="/utils/Common/phoneIcon.svg" alt="pborbit_logo" />
            <Input
              type={"tel"}
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleInputChange}
              p="10px"
              color="white"
              border={"none"}
              placeholder="Mobile Number"
              required
              ref={mobileNumberRef}
            />
          </Box>
          <Box
            display={"flex"}
            border={"1px solid white"}
            borderRadius="5px"
            w={["80%", "60%", "50%", "25%"]}
            pl="10px"
            pr="10px"
          >
            {" "}
            <Image src="/utils/common/password.svg" alt="pborbit_logo" />
            <Input
              type={passwordShown ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              p="10px"
              color="white"
              border={"none"}
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
            borderRadius="5px"
            w={["80%", "60%", "50%", "25%"]}
            pl="10px"
            pr="10px"
          >
            {" "}
            <Image
              src="/utils/common/password.svg"
              alt="pborbit_logo"
              onClick={toggleConfirmPasswordVisibility}
            />
            <Input
              name="confirmPassword"
              onChange={handleInputChange}
              type={confirmPasswordShown ? "text" : "password"}
              p="10px"
              color="white"
              border={"none"}
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
          {isLoading ? (
            Loader
          ) : (
            <CustomButton
              mt={["20px", "15px"]}
              color="white"
              widthArray={["80%", "50%", "45%", "22%"]}
              disabled={isLoading}
              text={isLoading ? "Loading..." : "Sign Up"}
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
          )}
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
    </ResizableContainer>
  );
};

export default SignupForm;
