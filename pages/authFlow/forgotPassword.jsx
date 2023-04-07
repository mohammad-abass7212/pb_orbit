/* eslint-disable react/no-unescaped-entities */
import CustomText, { variants } from "@/components/Common/CustomText";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

import * as React from "react";
import { useRef, useEffect } from "react";
import { useState } from "react";
import {
  CONTENT_TYPE_HEADER_LOGIN,
  USER_TYPE_HEADER,
} from "../adminAuth/headers/adminRequestHeaders";
import { SEND_OTP_EMAIL_API_ENDPOINT } from "../api/apiVariables";
// interface IAppProps {}

const ForgotPassword = () => {
  const router = useRouter();
  const toast = useToast();
  const emailRef = useRef(null);

  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.removeItem("forget-password");
  }, []);

  const handlesendOtpOnEmail = (e) => {
    e.preventDefault();

    const sendOtpOnEmail = async (email) => {
      if (validateEmail(email)) {
        console.log("Email is valid");

        try {
          const response = await axios.post(
            SEND_OTP_EMAIL_API_ENDPOINT,
            {
              email,
            },
            {
              headers: {
                "Content-Type": CONTENT_TYPE_HEADER_LOGIN,
                user_type: USER_TYPE_HEADER,
              },
            }
          );
          if (response.data?.success) {
            localStorage.setItem("user_id", response.data?.user_id);
            toast({
              title: response.data?.message,
              status: "success",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
            localStorage.setItem("forget-password", true);
            setTimeout(() => {
              router.push("/authFlow/otp");
            }, 1000);
          } else {
            toast({
              title: response.data?.message,
              status: "error",
              duration: 2000,
              isClosable: true,
              position: "top",
            });
          }
          return response.data;
        } catch (error) {
          console.log("Error from API:", error);
          toast({
            title: "Request Failed",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
            description: "Try again",
          });
        }
      } else {
        toast({
          title: "Invalid email",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
          description: "Try again",
        });
      }
    };

    sendOtpOnEmail(email);
  };
  const validateEmail = (email) => {
    // Regular expression for validating an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the regular expression
    return emailRegex.test(email);
  };

  // Example usage

  return (
    <Box
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["170px", "400px", "400px", "300px", "300px"]}
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
        </Box>
        <Flex
          w={["80%"]}
          overflow
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Heading mb={5} color={"white"}>
            Provide your email address{" "}
          </Heading>
          <Text color={"white"}>We'll send a 4-digit confirmation code</Text>
        </Flex>
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
            value={email}
            autoComplete="email"
            required
            placeholder="Enter Address"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handlesendOtpOnEmail(e);
              }
            }}
          />
        </Box>
        <Button
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlesendOtpOnEmail();
            }
          }}
          mt="15px"
          bg="#00E276"
          color="white"
          w={["60%", "50%", "45%", "22%"]}
          onClick={(e) => handlesendOtpOnEmail(e)}
          _hover={{
            bgColor: "orange",
            transform: "translateY(-5px)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            padding: "12px 16px",
          }}
          borderRadius={"15px"}
        >
          Send OTP
        </Button>
        <Box mt={30}>
          <CustomText
            link="/authFlow/userSignin"
            variant={variants.SMALL_HEADING}
            text={"Pborbit © 2023 All rights reserved"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
