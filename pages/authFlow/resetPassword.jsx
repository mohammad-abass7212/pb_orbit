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
import axios from "axios";
import {
  CONTENT_TYPE_HEADER_LOGIN,
  USER_TYPE_HEADER,
} from "../adminAuth/headers/adminRequestHeaders";
import { CHANGE_PASSWORD_API_ENDPOINT } from "../api/apiVariables";

const ResetPassword = () => {
  const toast = useToast();
  const [password, setPassword] = React.useState("");
  const [newpassword, setNewPassword] = React.useState("");
  const [hidden, setHidden] = React.useState(true);
  const [hidden2, setHidden2] = React.useState(true);

  const handleupdatePassword = async () => {
    const user_id = localStorage.getItem("user_id");
    if (!password || !newpassword) {
      toast({
        title: "Please enter your password.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else if (password !== newpassword) {
      toast({
        title: "Your password and confirm password does not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      try {
        const response = await axios.post(
          CHANGE_PASSWORD_API_ENDPOINT,
          {
            user_id,
            password,
            confirm_password: newpassword,
          },
          {
            headers: {
              "Content-Type": CONTENT_TYPE_HEADER_LOGIN,
              user_type: USER_TYPE_HEADER,
            },
          }
        );
        if (response.data?.success) {
          toast({
            title: response.data?.message,
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setTimeout(() => {
            localStorage.clear();
            router.push("/authflow/userSignin");
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
    }
  };
  return (
    <Box
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["130px", "120px", "150px", "105px", "105px"]}
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
            <Heading color={"white"}>Reset Password </Heading>
            <Text color={"white"}>Enter New Password</Text>
          </Flex>
        </Box>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input
            type={hidden ? "password" : ""}
            variant="unstyled"
            p="10px"
            color="white"
            border={"none"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Image
            onClick={() => setHidden(!hidden)}
            src="/utils/common/hide-2.svg"
            alt="pborbit_logo"
          />
        </Box>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input
            type={hidden2 ? "password" : ""}
            variant="unstyled"
            p="10px"
            color="white"
            border={"none"}
            placeholder="Confirm password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newpassword}
          />
          <Image
            src="/utils/common/hide-2.svg"
            alt="pborbit_logo"
            onClick={() => setHidden2(!hidden2)}
          />
        </Box>

        <Button
          mt="15px"
          bg="#00E276"
          color="white"
          w={["60%", "50%", "45%", "22%"]}
          onClick={handleupdatePassword}
        >
          Update Password
        </Button>
        <Box mt={30}>
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Already have an account?Signin"}
            link="/authFlow/userSignin"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
