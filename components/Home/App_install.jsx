import { Flex, Box, Image, Heading, Text, Input, Icon } from "@chakra-ui/react";
// import Image from 'next/image';
import { FaTelegramPlane } from "react-icons/fa";

const App_install = () => {
  return (
    <Flex
      position="relative"
      w="90%"
      m="auto"
      color="white"
      mt="40px"
      zIndex="4"
      alignItems="center"
      // display={{ lg: "flex", md: "flex", sm: "block" }}
      flexDirection={["column", "column", "column", "row", "row"]}
    >
      <Image
        style={{ position: "absolute", right: "-54px", bottom: "00px" }}
        src="/utils/Common/app-bg.png"
        alt="pborbit"
        zIndex="-1"
      />
      <Box
        lineHeight={"7"}
        w={["90%", "40%", "40%", "60%", "65%"]}
        m="auto"
        color="white"
      >
        <Box w="80%">
          <Heading
            style={{ fontWeight: "bold" }}
            mb="10px"
            ml="10px"
            fontSize={["25px", "20px", "20px", "30px"]}
          >
            This App is available for your smart phone.
          </Heading>
        </Box>

        <Text ml="10px" color="hsl(80deg 8% 72%)" w="95%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply
        </Text>
        <Flex ml="10px" mt="30px" gap="25px" lineHeight={"10"} w="70%">
          <Image
            w={["50%", "100%", "100%", "45%", "50%"]}
            src="/utils/common/apple-app.png"
            alt="pb"
          />

          <Image
            w={["50%", "100%", "100%", "45%", "50%"]}
            src="/utils/common/google-app.png"
            alt="pb"
          />
        </Flex>

        <Flex mt="30px">
          <Box
            w="70%"
            borderBottomStartRadius="50px"
            borderTopStartRadius="50px"
            bgColor={"white"}
            color="black"
            pl="30px"
          >
            <Input
              fontSize="15px"
              p="5px"
              variant="unstyled"
              placeholder="Enter Your Mobile"
            />
          </Box>
          <Box
            w="15%"
            borderBottomEndRadius="50px"
            borderTopEndRadius={"50px"}
            bg="#01df74"
            display={"flex"}
            justifyContent={"center"}
          >
            <FaTelegramPlane size={35} alignitems={"center"} />{" "}
          </Box>
        </Flex>
      </Box>
      <Box w="55%" m="auto" color="white">
        <Image
          w="100%"
          mb="40px"
          mt="40px"
          src="/utils/common/app-install.png"
          alt="pb"
        />
      </Box>
    </Flex>
  );
};
export default App_install;
