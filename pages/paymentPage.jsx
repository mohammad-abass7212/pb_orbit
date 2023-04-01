import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ViewAllCommunity from "../components/AdminFlow/viewAllCommunity";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Searchbar from "../components/AdminFlow/Searchbar";
import Payment_page from "./Payemnt_Page";
function Paymentpage() {
  return (
    <MainLayout>
      <Box bgColor={"#050017"} height={"1000px"}>
        <Payment_page />
      </Box>
    </MainLayout>
  );
}

export default Paymentpage;
