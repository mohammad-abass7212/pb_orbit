import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
// import {Spin} from "react-reveal";
interface IAppProps {}

const Login_option: React.FunctionComponent<IAppProps> | any = () => {
  return (
    <Box
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
          {/* </Spin> */}
        </Box>
        <Heading color={"white"}>Let’s Get Started</Heading>

        <Text color={"white"}>Start with signing up or sign in</Text>
        <Flex
          w={["266px", "366px", "366px", "366px", "366px"]}
          alignItems="center"
          bg=" white"
          gap={["10px", "10px", "10px", "10px", "10px"]}
          h={["50px", "60px", "60px", "60px", "60px"]}
          color={"white"}
          borderRadius={"10px"}
        >
          {" "}
          <Box
            w={["29.5px", "27.5px", "27.5px", "27.5px"]}
            ml={["31px", "31px", "31px", "41px", "41px"]}
          >
            <Image
              w={["100%", "100%", "100%", "100%", "100%"]}
              src="/utils/Common/email.svg"
              alt=""
            />{" "}
          </Box>{" "}
          {/* <Box w="80%"  > */}
          <Text
            fontSize={["15px", "20px", "20px", "20px", "20px"]}
            color="black"
            w={["236.51px", "236.51px", "236.51px", "236.51px", "236.51px"]}
            textAlign={"center"}
          >
            Sign up with Email
          </Text>{" "}
          {/* </Box> */}
        </Flex>
        <Box color={"white"}>OR</Box>
        <Flex
          w={["266px", "366px", "366px", "366px", "366px"]}
          alignItems="center"
          bg=" white"
          gap={["10px", "10px", "10px", "10px", "10px"]}
          h={["50px", "60px", "60px", "60px", "60px"]}
          color={"white"}
          borderRadius={"10px"}
        >
          <Box
            w={["29.5px", "27.5px", "27.5px", "27.5px"]}
            ml={["31px", "31px", "31px", "41px", "41px"]}
          >
            {" "}
            <Image src="/utils/Common/apple.svg" alt="" />
          </Box>{" "}
          {/* <Box w="80%" > */}
          <Text
            fontSize={["15px", "20px", "20px", "20px", "20px"]}
            color="black"
            w={["236.51px", "236.51px", "236.51px", "236.51px", "236.51px"]}
            borderRadius={"20px"}
            align="center"
          >
            Sign up with Apple
          </Text>{" "}
          {/* </Box> */}
        </Flex>
        <Flex
          w={["266px", "366px", "366px", "366px", "366px"]}
          alignItems="center"
          bg=" white"
          gap={["10px", "10px", "10px", "10px", "10px"]}
          h={["50px", "60px", "60px", "60px", "60px"]}
          color={"white"}
          borderRadius={"10px"}
        >
          <Box
            w={["29.5px", "27.5px", "27.5px", "27.5px"]}
            ml={["21px", "21px", "21px", "41px", "41px"]}
          >
            <Image src="/utils/Common/google.svg" alt="" />
          </Box>
          {/* <Box w="80%" > */}

          <Text
            fontSize={["15px", "20px", "20px", "20px", "20px"]}
            color="black"
            w={["236.51px", "236.51px", "236.51px", "236.51px", "236.51px"]}
            textAlign="center"
          >
            Sign up with Google
          </Text>
          {/* </Box> */}
        </Flex>
        <Text mt="4px" color="white">Already have an account? Signin</Text>
      </Flex>
    </Box>
  );
};

export default Login_option;
