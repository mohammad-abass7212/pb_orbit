import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ViewAllCommunity from "../components/AdminFlow/viewAllCommunity";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Searchbar from "../components/AdminFlow/Searchbar";
import Payment_page from "./Payemnt_Page";
function Paymentpage() {
  return (
    <MainLayout>
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
          <Text pl={10} color={"white"} fontSize={"25px"}>
            Payment Page
          </Text>
        </Box>
      </VStack>
      <Box bgColor={"#050017"} marginTop={-10}>
        <Payment_page />
      </Box>
    </MainLayout>
  );
}

export default Paymentpage;
