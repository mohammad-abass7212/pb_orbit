import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
// import Image from 'next/image';
// import Image from 'next/image';
import React from "react";
import { FunctionComponent } from "react";
const How_it_work: FunctionComponent = () => {
  return (
    <Box>
      <Box>
        {" "}
        <Center>
          {" "}
          <Heading>How it Works</Heading>{" "}
        </Center>
        <Center mt={["0px", "20px"]}>
          {" "}
          <Text w={["80%", "95%", "35%"]} textAlign="center" color="#B4B4B6">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industryLorem Ipsum is simply
          </Text>{" "}
        </Center>
        <Center mt={["20px", "20px"]}>
          <Box bg={"white"} w={["60%", "30%"]} borderRadius={"50px"}>
            <Button
              bg="#336EB1"
              w="50%"
              fontSize={[ "9.5px", "15px"]}
              h={["30px", "50px"]}
              borderRadius={"50px"}
            >
              {" "}
              Player{" "}
            </Button>
            <Button
              bg="white"
              color="black"
              w={["50%", "50%"]}
              fontSize={[ "9.5px", "15px"]}
              h={["30px", "50px"]}
              borderRadius={"50px"}
            >
              {" "}
              Community{" "}
            </Button>
          </Box>
        </Center>{" "}
      </Box>
      <Box
        display="flex"
        pl={["50px", " 30px", "0px", "0px", "300px"]}
        pr={["40px", "250px"]}
      >
        <Box w={["30%", "100%", "30%"]}>
          <Image
            src="/utils/Common/how-player.png"
            alt="pb"
            w={["100%", "100%", "100%"]}
            ml={"0px"}
          />
        </Box>
        <Box  w={["70%", "100%", "100%"]} p={["10px", " 300px", "0px", "0px", "120px"]}>
        <Box display="flex" alignItems="center" gap={"25px"}>
            <Center
              boxSize={["40px", "90px"]}
              display="flex"
              // textAlign={"center"}
              alignItems="center"
              // bg="red"
              border={[ "dashed 2px", "dashed 3px"]}
              borderColor={"#3333ff"}
              // boxDecorationBreak={2}
              // style={{ borderCollapse: "collapse"}}
              borderRadius="50%"
              color="#336eb1"
            >
              <Center
                boxSize={["25px", "70px"]}
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
            ml={[ "17px" , "40px"]}
            borderLeft={[ "dashed 2px", "dashed 3px"]}
            borderColor={"#3333ff"}
            h={["21px", "42px"]}
            w="0px"
          ></Box>
          <Box display="flex" alignItems="center" gap={"25px"}>
            <Center
              boxSize={["40px", "90px"]}
              display="flex"
              // textAlign={"center"}
              alignItems="center"
              // bg="red"
              border={[ "dashed 2px", "dashed 3px"]}
              borderColor={"#3333ff"}
              // boxDecorationBreak={2}
              // style={{ borderCollapse: "collapse"}}
              borderRadius="50%"
              color="#336eb1"
            >
              <Center
                boxSize={["25px", "70px"]}
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
          ml={[ "17px" , "40px"]}
            borderLeft={[ "dashed 2px", "dashed 3px"]}
            borderColor={"#3333ff"}
            h={["21px", "42px"]}
            w="0px"
          ></Box>
        <Box display="flex" alignItems="center" gap={["25px","25px"]}>
            <Center
              boxSize={["40px", "90px"]}
              display="flex"
              // textAlign={"center"}
              alignItems="center"
              // bg="red"
              border={[ "dashed 2px", "dashed 3px"]}
              borderColor={"#3333ff"}
              // boxDecorationBreak={2}
              // style={{ borderCollapse: "collapse"}}
              borderRadius="50%"
              color="#336eb1"
            >
              <Center
                boxSize={["25px", "70px"]}
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
         
        </Box>
      </Box>

      <Center>
       

        <Button
          mt="40px"
          colorScheme="whatsapp"
          w={["70%", "30px", "30px", "20%"]}
          fontSize={["15px", "30px", "30px", "20px"]}
          h={["40px", "30px", "30px", "40px"]}
          borderRadius={["20px", "30px", "30px", "60px"]}
        >
          Get Sarted →→
        </Button>
      </Center>
    </Box>
  );
};
export default How_it_work;
