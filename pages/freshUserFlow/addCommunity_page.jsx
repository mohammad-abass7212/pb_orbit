import { VStack, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Searchbar from "../../components/AdminFlow/Searchbar";
import Add_Community from "../../components/AdminFlow/Add_Community";

const add_community_page = () => {
  return (
    <Box bgColor={"#050017"}>
      <VStack
        position={"fixed"}
        left={"100px"}
        gap={5}
        alignItems={"left"}
        float="left"
        display="block"
        pb={"100px"}
      >
        <Box>
          <Image
            mt={"5"}
            mb={"2"}
            width={"30%"}
            src="/utils/Common/logo.png"
            alt="pborbit_logo"
          />
        </Box>
        <Box>
          <Text color={"white"} fontSize={"25px"}>
            Communities
          </Text>
        </Box>
      </VStack>

      <VStack justifyContent={"space-between"}>
        <Box marginTop={"160px"}>
          <Add_Community />
        </Box>
      </VStack>
    </Box>
  );
};

export default add_community_page;
