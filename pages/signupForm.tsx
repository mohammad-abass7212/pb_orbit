import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import CustomText, { variants } from "@/components/Common/CustomText";
import { validate } from "./adminAuth/validator/SignUpFormValidator";
import { useSignUp } from "./adminAuth/adminStateManager/adminUseReducer";
import "@/styles/signupForm/signupForm.module.css";

interface ISignupProps {}

const SignupForm: React.FC<ISignupProps> = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { formData, isLoading, error, handleInputChange, handleFormSubmit } =
    useSignUp();

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
      handleFormSubmit(event);
    } else {
      alert("Please fill all required fields!");
    }
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (password !== confirmPassword) {
      // Show error message using Chakra Alert
      return;
    }

    handleFormSubmit(event);
  };

  return (
    <Box
      bg="#050017"
      pt={["80px", "120px", "120px", "120px", "100px"]}
      pb={["80px", "200px", "200px", "20px", "120px"]}
      position="relative"
      h={"100%"}
    >
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
              variant="unstyled"
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
          >
            {" "}
            <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
            <Input
              type={"tel"}
              name="mobile_number"
              value={formData.mobile_number}
              onChange={handleInputChange}
              variant="unstyled"
              p="10px"
              color="white"
              border={"none"}
              placeholder="Enter mobile number"
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
              onClick={(e) => handleInputChange(e)}
              variant="unstyled"
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
            <Image src="/utils/common/password.svg" alt="pborbit_logo" />
            <Input
              name="confirmPassword"
              onChange={handleInputChange}
              type={confirmPasswordShown ? "text" : "password"}
              variant="unstyled"
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

          <Button
            mt={["20px", "15px"]}
            bg="#00E276"
            color="white"
            w={["80%", "50%", "45%", "22%"]}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
        <Flex
          flexDirection={["column", "row"]}
          alignItems={["center", "baseline"]}
          justifyContent={["center", "flex-start"]}
          mt={["30px", "40px"]}
        >
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Already have an account? Sign in"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignupForm;
