import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import PaymentPageComponent from "../../components/AdminFlow/Payment_Page";
const paymentPage = () => {
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
        <PaymentPageComponent />
      </Box>
    </MainLayout>
  );
};

export default paymentPage;
