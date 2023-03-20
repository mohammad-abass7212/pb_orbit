import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import CustomText, { variants } from "@/components/Common/CustomText";

const createCommunity = () => {
  return (
    <Box
      height={"800px"}
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["170px", "400px", "400px", "40px", "40px"]}
      position="relative"
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Box
          w={["40%", "40%", "40%", "30%", "20%"]}
          mb={["73px", "73px", "73px", "40px", "54px"]}
        >
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
        </Box>

        <Box mt={100}>
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Pborbit © 2023 All rights reserved"}
            link="/authFlow/userSignin"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default createCommunity;
