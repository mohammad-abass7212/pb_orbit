import React from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import axios from "axios";
import {
  CONTENT_TYPE_HEADER_LOGIN,
  USER_TYPE_HEADER,
} from "../adminAuth/headers/adminRequestHeaders";
import {
  RESEND_OTP_API_ENDPOINT,
  VERIFY_OTP_API_ENDPOINT,
} from "../api/apiVariables";
import { useRouter } from "next/router";
// interface IAppProps {}

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const [redirectto, setRedirectto] = useState(false);
  const toast = useToast();
  const otpRef = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const user_id = localStorage.getItem("user_id");
  ///////////////////////handlling verifying otp api calling///////////////////////////

  const onSubmitOTP = (e) => {
    e.preventDefault();

    const otpVerification = async (otp, user_id) => {
      const formdata = {
        type: "email",
        user_id: user_id,
        value: otp,
      };
      try {
        const response = await axios.post(VERIFY_OTP_API_ENDPOINT, formdata, {
          headers: {
            "Content-Type": CONTENT_TYPE_HEADER_LOGIN,
            user_type: USER_TYPE_HEADER,
          },
        });
        console.log("Response from API:", response.data);
        toast({
          title: response.data.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        const token = response.data.token;
        localStorage.setItem("token", token);
        setTimeout(() => {
          router.push("/community");
        }, 2000);
      } catch (error) {
        console.log("Error from API:", error);
        toast({
          title: "Signin Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
          description: "Invalid OTP submission",
        });
      }
    };
    if (otp.length !== 4) {
      toast({
        title: "OTP Required",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
        description: "Fill all the input fields",
      });
    } else {
      otpVerification(otp, user_id);
    }
  };

  ///////////////////////handlling resend otp api calling///////////////////////////
  const handleResendOtp = (e) => {
    e.preventDefault();

    const resendOtp = async () => {
      try {
        const response = await axios.post(
          RESEND_OTP_API_ENDPOINT,
          {
            type: "email",
            user_id,
          },
          {
            headers: {
              "Content-Type": CONTENT_TYPE_HEADER_LOGIN,
              user_type: USER_TYPE_HEADER,
            },
          }
        );
        console.log("Response from API:", response.data);
        toast({
          title: "OTP Sent On your registered Email account",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        return response.data;
      } catch (error) {
        console.log("Error from API:", error);
        toast({
          title: "Signin Failed",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
          description: "Something went wrong try again!",
        });
      }
    };
    
      resendOtp();
    
  };

  return (
    <Box
      height={"800px"}
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
          {/* <Spin> */}
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
          <Flex flexDirection={"column"} alignItems={"center"} gap="20px">
            <Heading color={"white"}>OTP Verification </Heading>
            <Text color={"white"} textAlign="center" width={"100%"}>
              We have sent you a verfication code on your email address Please
              paste the code below to confirm your identiy.
            </Text>
          </Flex>
        </Box>
        <Box>
          <Input
            name="otp"
            value={otp}
            onChange={handleChange}
            color="white"
            border={"1px solid white"}
            size="lg"
            placeholder="Enter OTP...."
            ref={otpRef}
            maxLength="4"
            w={["400px"]}
            pl={["30px"]}
            type="text"
          />
        </Box>
        <Flex color={"white"} gap="8px">
          <Box>
            <Text>didnt recieve the Verification OTP?</Text>
          </Box>{" "}
          <Box onClick={(e) => handleResendOtp(e)}>
            <Text cursor={"pointer"} color={"green"} fontWeight="700">
              Resend again
            </Text>
          </Box>
        </Flex>
        <Button
          mt="15px"
          bg="#00E276"
          color="white"
          w={["60%", "50%", "45%", "22%"]}
          onClick={onSubmitOTP}
        >
          Verify
        </Button>
        <Box mt={30}>
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Pborbit © 2023 All rights reserved"}
            link="/authFlow/userSignin"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default OtpForm;
