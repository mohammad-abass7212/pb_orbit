import { login } from "@/context/AuthProvider";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

const ChooseSignupMedium = ({ src, optionsText, onclickfunc }) => {
  const router = useRouter();
  const handleSubmit = () => {
    if (onclickfunc === "googleAuth") {
      login();
    } else {
      router.push("/authFlow/signupForm");
    }
  };

  return (
    <>
      <Box h={"75%"}>
        <Button
          onClick={handleSubmit}
          w={["266px", "366px", "366px", "366px", "366px"]}
          alignItems="center"
          bg=" white"
          // gap={["10px", "10px", "10px", "10px", "10px"]}
          h={["50px", "60px", "60px", "60px", "60px"]}
          color={"white"}
          borderRadius={"10px"}
          justifyContent="space-evenly  "
        >
          {" "}
          <Box
            w={["29.5px", "27.5px", "27.5px", "27.5px"]}
            // ml={["31px", "31px", "31px", "41px", "41px"]}
          >
            <Image
              w={["100%", "100%", "100%", "100%", "100%"]}
              src={src}
              alt=""
            />{" "}
          </Box>{" "}
          {/* <Box w="80%"  > */}
          <Text
            fontSize={["15px", "20px", "20px", "20px", "20px"]}
            color="#656565"
            w={["236.51px", "236.51px", "236.51px", "236.51px", "236.51px"]}
            textAlign={"center"}
          >
            {optionsText}
          </Text>{" "}
          {/* </Box> */}
        </Button>
      </Box>
    </>
  );
};
export default ChooseSignupMedium;
