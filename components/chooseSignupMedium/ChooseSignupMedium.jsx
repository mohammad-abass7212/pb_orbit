import { login } from "@/context/AuthProvider";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useClickAnimation } from "../Animations/useClickAnimation";
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
      <Box h={"75%"} pt={2}>
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
          _hover={{
            bgColor: "#A8A8AA",
            // bgColor: "#F2C94C",
            // bgColor: "#56CCF2",
            // bgColor: "#FFA07A",
            // bgColor: "#F2E4CB",
            // bgColor: "#FFD700",

            transform: "translateY(-4px)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            padding: "12px 16px", // adjust padding to increase button size
          }}
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
