import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function AddUserCardUtils() {
  return (
    <Box>
      {" "}
      <HStack>
        <Box>
          {" "}
          <Image
            alt="userIcon"
            src="/utils/Common/Avatar.png"
            borderRadius={"50%"}
          />
        </Box>
        <VStack alignItems={"left"}>
          <Text fontSize={"18px"} fontFamily={"Lato"}>
            {"Shrikant Sharma"}
          </Text>
          <Text fontSize={"12px"} fontFamily={"Lato"}>
            Player
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default AddUserCardUtils;
