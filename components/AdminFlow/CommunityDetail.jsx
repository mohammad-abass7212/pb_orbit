import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function CommunityDetail() {
  return (
    <Box >
      <HStack gap={10}justifyContent={"center"}>
        <Box borderRadius={"15px"}>
          <Image
            src={"/utils/Common/communityBuilding.svg"}
            alt="communityImage"
          />
        </Box>
        <Box>
          <VStack
            
            display={"flex"}
            alignContent={"left"}
            position={"relative"}
            align={"left"}
          >
            <Box   >
              <Heading fontSize={26} color={"white"} fontFamily={"poppins"}>
                Cityview Walk
              </Heading>
            </Box>
            <Flex gap={10} >
              <Flex gap={4}>
                <Image
                width={""}
                  src={"/utils/Common/profileIcon.svg"}
                  alt="profileIcon"
                />
                <Box flexDirection={"column"}>
                  <Text color={"white"}>Shivendra Kumar</Text>{" "}
                  <Text color={"#A097BF"}>Community Manage</Text>
                </Box>
              </Flex>
              <Flex gap={4}>
                <Image src={"/utils/Common/phoneIcon1.svg"} alt="profileIcon" />
                <Box flexDirection={"column"}>
                  <Text color={"white"}>+1 676 676 67612</Text>{" "}
                  <Text color={"#A097BF"}>Phone Number</Text>
                </Box>
              </Flex>
              <Flex gap={4}>
                <Image src={"/utils/Common/location.svg"} alt="profileIcon" />
                <Box flexDirection={"column"}>
                  <Text color={"white"}>117 A Three Springs Rd, USA</Text>{" "}
                  <Text color={"#A097BF"}>Location</Text>
                </Box>
              </Flex>
            </Flex>
            <Flex gap={10}>
              <Flex gap={4}>
                <Image src={"/utils/Common/court1.svg"} alt="profileIcon" />
                <Box flexDirection={"column"}>
                  <Text color={"white"}>6 Number</Text>{" "}
                  <Text color={"#A097BF"}>Court</Text>
                </Box>
              </Flex>
              <Flex gap={4}>
                <Image src={"/utils/Common/emailIcon1.svg"} alt="profileIcon" />
                <Box flexDirection={"column"}>
                  <Text color={"white"}>cityview@gmail.com</Text>{" "}
                  <Text color={"#A097BF"}>Email Address</Text>
                </Box>
              </Flex>
            </Flex>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default CommunityDetail;
