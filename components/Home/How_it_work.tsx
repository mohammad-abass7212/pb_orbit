import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FunctionComponent } from "react";
import CustomButton from "../Common/CustomButton";
import ButtonSwitch from "../CustomSwitchButton";
const How_it_work: FunctionComponent = () => {
  const router = useRouter();
  const handleRouting = () => {
    router.push("/authFlow/ChooseSignup");
  };
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      position="relative"
      alignItems="center"
      gap={"20px"}
    >
      <Image
        style={{ position: "absolute", left: "-140px", bottom: "00px" }}
        src="/utils/Common/dot-bg.png"
        alt="pborbit"
      />
      <Box>
        {" "}
        <Center>
          {" "}
          <Heading> How it Works</Heading>{" "}
        </Center>
        <Center mt={["0px", "20px"]}>
          {" "}
          <Text
            w={["80%", "95%", "35%", "64%", "71%"]}
            textAlign="center"
            color="#B4B4B6"
          >
            Lorem Ipsum is simply dummy text of the printing and type setting
            industryLorem Ipsum is simply
          </Text>{" "}
        </Center>
        <Center mt="20px"></Center>{" "}
      </Box>
      <Box
        display="flex"
        // pl={["50px", " 30px", "0px", "0px", "300px"]}
        // pr={["40px", "250px"]}
      >
        <Box w={["30%", "30%", "30%", "30%", "30%"]} mr={["0px", "50px"]}>
          <Image
            src="/utils/Common/how-player.png"
            alt="pb"
            w={["100%", "100%", "100%", "100%", "100%"]}
            ml={"0px"}
          />
        </Box>
        <Box
          w={["70%", "100%", "100%", "50%", "100%"]}
          mt="25px"
          //  p={["10px", " 300px", "0px", "0px", "120px"]}
        >
          <Box display="flex" alignItems="center" gap={"25px"}>
            <Center
              w={["40px", "70px", "80px", "90px", "90px"]}
              h={["40px", "60px", "80px", "85px", "90px"]}
              alignItems="center"
              // bg="red"
              border={["dashed 2px", "dashed 3px"]}
              // boxDecorationBreak={2}
              // style={{ borderCollapse: "collapse"}}
              borderRadius="50%"
              color="teal"
            >
              <Center
                boxSize={["30px", "50px", "60px", "65px", "70px"]}
                // m="20px"
                // textAlign={"center"}
                // alignItems="center"
                bg="white"
                borderRadius="50%"
                fontSize={["10px", "20px"]}
                fontWeight={"800"}
                color="black"
              >
                01
              </Center>{" "}
            </Center>
            <Text fontSize={["10px", "20px"]}>
              {" "}
              Create free account on PBorbit
            </Text>
          </Box>
          <Box
            ml={["20px", "30px", "40px", "43px", "43px"]}
            borderLeft={[
              "dashed 2px",
              "dashed 2px",
              "dashed 2px",
              "dashed 3px",
              "dashed 3px",
            ]}
            // borderColor={"#3333ff"}
            h={["21px", "22px", "21px", "22px", "22px"]}
            color="teal"
            w="0px"
          ></Box>
          <Box display="flex" alignItems="center" gap={"25px"}>
            <Center
              w={["40px", "70px", "80px", "90px", "90px"]}
              h={["40px", "60px", "80px", "85px", "90px"]}
              display="flex"
              // textAlign={"center"}
              alignItems="center"
              // bg="red"
              border={["dashed 2px", "dashed 3px"]}
              borderColor={"#3333ff"}
              // boxDecorationBreak={2}
              // style={{ borderCollapse: "collapse"}}
              borderRadius="50%"
              color="teal"
            >
              <Center
                boxSize={["30px", "50px", "60px", "65px", "70px"]}
                // m="20px"
                // textAlign={"center"}
                // alignItems="center"
                bg="white"
                borderRadius="50%"
                fontSize={["10px", "20px"]}
                fontWeight={"800"}
                color="black"
              >
                02
              </Center>{" "}
            </Center>
            <Text fontSize={["10px", "20px"]}>
              {" "}
              Create free account on PBorbit
            </Text>
          </Box>
          <Box
            ml={["20px", "30px", "40px", "43px", "43px"]}
            borderLeft={[
              "dashed 2px",
              "dashed 2px",
              "dashed 2px",
              "dashed 3px",
              "dashed 3px",
            ]}
            color="teal"
            h={["21px", "22px", "21px", "22px", "22px"]}
            w="0px"
          ></Box>
          <Box display="flex" alignItems="center" gap={["25px", "25px"]}>
            <Center
              w={["40px", "70px", "80px", "90px", "90px"]}
              h={["40px", "60px", "80px", "85px", "90px"]}
              display="flex"
              // textAlign={"center"}
              alignItems="center"
              // bg="red"
              border={["dashed 2px", "dashed 3px"]}
              borderColor={"#3333ff"}
              // boxDecorationBreak={2}
              // style={{ borderCollapse: "collapse"}}
              borderRadius="50%"
              color="teal"
            >
              <Center
                boxSize={["30px", "50px", "60px", "65px", "70px"]}
                // m="20px"
                // textAlign={"center"}
                // alignItems="center"
                bg="white"
                borderRadius="50%"
                fontSize={["10px", "10px", "10px", "20px", "20px", "20px"]}
                fontWeight={"800"}
                color="black"
              >
                03
              </Center>{" "}
            </Center>
            <Text fontSize={["10px", "20px"]}>
              {" "}
              Create free account on PBorbit
            </Text>
          </Box>
        </Box>
      </Box>

      <Center onClick={handleRouting}>
        <CustomButton
          bg="#01df74"
          btnBorderRadius={["25px", "25px", "25px", "25px", "27px"]}
          mt={["0px", "-10px", "10px", "-10px", "40px"]}
          btnHoverColor="#ff6900"
          buttonBgColor={"#00E276"}
          fontSize={["15px", "16px", "16px", "16px", "16px", "20px"]}
          iconVisStatus={false}
          imageSrc=""
          customHeight={["35px", "30px", "30px", "40px", "40px"]}
          text="Get Sarted →"
          mb={[]}
          widthArray={["300px", "300px", "300px", "300px", "300px"]}
        ></CustomButton>
      </Center>
    </Box>
  );
};
export default How_it_work;
