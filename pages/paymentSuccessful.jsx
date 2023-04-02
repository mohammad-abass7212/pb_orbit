import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Payment_Done from "../pages/Payment_Done";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
function paymentSuccessful() {
  return (
    <MainLayout>
      <Box height={"100vh"}>
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
        <Box>
          <Payment_Done />
        </Box>
      </Box>
    </MainLayout>
  );
}

export default paymentSuccessful;
