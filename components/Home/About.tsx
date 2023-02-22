import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
const About: FunctionComponent = () => {


 

  return (
    <Box
      justifyContent="space-between"
      mt="40px"
      p={["40px", "20px", "50px", "100px", "120px"]}
      display={["block", "flex", "flex", "flex", "flex"]}
    >
      <Box>
      
    

        <Image src="/utils/Common/about-img.png" alt="pborbit" />
      </Box>
      <Box
        pl={["0px", "0px", "60px", "90px", "190px"]}
        w={["90%", "50%", "50%", "50%", "50%"]}
        mt="80px"
      >
        <Heading>"hihi"</Heading>

        

        <Heading mt="10px" mb="10px">
          "rahul"
        </Heading>
        <Flex flexDirection={"column"} gap="10px">
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px", "20px", "20px", "20px", "20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />{" "}
            <Text> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Community Manage</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Manage Your Court Easily</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Court reservations</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Install app and get Rewards</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={"10px"}>
            {" "}
            <Image
              boxSize={["20px"]}
              src="/utils/Common/checklist.png"
              alt="pb"
            />
            <Text> Community Manage</Text>
          </Box>

          <Button
            mt={["10px", "10px", "10px", "10px", "40px"]}
            bg="#01df74"
            w={["60%", "55%", "60%", "80%", "60%"]}
            fontSize={["13px", "16px", "16px", "16px", "16px", "20px"]}
            h={["40px", "30px", "30px", "40px", "40px"]}
            borderRadius={["20px", "25px", "25px", "25px", "27px"]}
            p="25px"
          >
            Get Started →
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
export default About;
