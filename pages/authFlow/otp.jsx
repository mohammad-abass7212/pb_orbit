import React from "react";
import CustomText, { variants } from "@/components/Common/CustomText";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Spinner,
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
import CustomButton from "@/components/CustomButton";

const OtpForm = () => {
  const [counter, setCounter] = useState(60);
  const formattedCounter = `00:${counter.toString().padStart(2, "0")}`;
  const [otp, setOtp] = useState("");
  const [redirectto, setRedirectto] = useState(false);
  const toast = useToast();
  const otpRef = useRef(null);
  const router = useRouter();
  const otpRef1 = useRef(null);
  const otpRef2 = useRef(null);
  const otpRef3 = useRef(null);
  const otpRef4 = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resendOtpState, setResendOtpState] = useState(false);
  const handleChange = (value) => {
    console.log(value, "value");
    setOtp(value);
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
        const { success, message } = response.data;

        if (!success) {
          setIsLoading(false);
          toast({
            title: message,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "bottom",
          });
        } else if (success) {
          toast({
            title: response.data.message,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setIsLoading(false);
          const token = response.data.token;
          //Checking route of user.
          const prevPath = localStorage.getItem("forget-password");
          localStorage.setItem("token", token);
          router.push(prevPath ? "/authFlow/resetPassword" : "/community");
        }
      } catch (error) {
        setIsLoading(false);
        // console.log("Error from API:", error);
        toast({
          title: "Something went Wrong please try again!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    };
    if (otp.length !== 4) {
      console.log(otp, otp.length);
      setIsLoading(true);

      toast({
        title: "OTP Required",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
        description: "Please enter the OTP code.",
      });
      setTimeout(() => {
        setIsLoading(false);
      });
    } else if (otp.length == 0) {
      toast({
        title: "OTP Required",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
        description: "OTP code should be 4 digits long.",
      });
      setTimeout(() => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      const otpValue = `${otpRef1.current.value}${otpRef2.current.value}${otpRef3.current.value}${otpRef4.current.value}`;
      otpVerification(otpValue, user_id);
    }
  };

  ///////////////////////handlling resend otp api calling///////////////////////////
  const handleResendOtp = (e) => {
    e.preventDefault();
    setResendOtpState(true);

    (async () => {
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
        const { success, message, token } = response.data;

        if (success) {
          setResendOtpState(false);
          toast({
            title: message,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setCounter(60);
        } else if (!success) {
          setResendOtpState(false);
          toast({
            title: message,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }

        return response.data;
      } catch (error) {
        setResendOtpState(false);
        console.log("Error from API:", error);
        toast({
          title: "Something went Wrong please try again!",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    })();
  };
  /// counter logic below ///
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <Box
      height={"100vh"}
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
        <Box
          display={"felx"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
        >
          <HStack color="white" name="otpInput" spacing={4}>
            <PinInput
              value={otp}
              onChange={(value) => handleChange(value)}
              size="lg"
              variant="flushed"
              border="none"
              placeholder=""
              focusBorderColor="#00e276"
            >
              <PinInputField ref={otpRef1} />
              <PinInputField ref={otpRef2} />
              <PinInputField ref={otpRef3} />
              <PinInputField
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onSubmitOTP(e);
                  }
                }}
                ref={otpRef4}
              />
            </PinInput>
          </HStack>
        </Box>
        <Flex color={"white"} gap="8px">
          <Box>
            <Text>{`Didn't recieve the verification OTP?`}</Text>
          </Box>{" "}
          <Box
            display={"flex"}
            onClick={counter >= 1 ? null : (e) => handleResendOtp(e)}
          >
            {resendOtpState ? (
              <Box>
                <Spinner color="green" />
              </Box>
            ) : (
              <Text
                style={
                  counter >= 1
                    ? {
                        opacity: 0.5,
                        pointerEvents: "none",
                        cursor: "none",
                      }
                    : {
                        cursor: "pointer",
                        color: "green",
                        fontWeight: "700",
                      }
                }
                _disabled={counter >= 1}
              >
                Resend OTP
              </Text>
            )}
          </Box>
          {counter == 0 ? null : (
            <Box color={"grey.100"}>{formattedCounter}</Box>
          )}
        </Flex>
        <CustomButton
          mt={["20px", "15px"]}
          onClick={onSubmitOTP}
          color="white"
          widthArray={["80%", "50%", "45%", "22%"]}
          text={isLoading ? "Submitting.." : "Verify"}
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
