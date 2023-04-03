import {
  Box,
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardReservations = () => {
  return (
    <Card
      height={"140px"}
      borderRadius="7"
      alignItems="center"
      m={3}
      p={6}
      bgColor={"#26203A"}
      color={"white"}
      width={["570px"]}
    >
      <Flex mt={"-4%"} pl={"35px"} alignItems={"center"} pt={3}>
        <Box mr={6} width={"20%"}>
          <Image
            zIndex={1}
            name={""}
            src={"/utils/Common/pickleparkdemo.svg"}
            alt={"communityIcons"}
            borderRadius={"50%"}
          />
        </Box>
        <Box>
          <Heading color={"white"} size="md" pt={2}>
            {"Pcikel Park Demo"}
          </Heading>

          <HStack pt={1}>
            <Image
              zIndex={1}
              name={""}
              src={"utils/Common/Location.svg"}
              alt={"communityIcons"}
              borderRadius={15}
            />
            <Text color={"#A097BF"}>{"9 Jan, 10:30 - 11:30am"}</Text>
          </HStack>
          <Flex gap={2}>
            <HStack>
              <Image src="/utils/Common/playerIcon1.svg" />
              <Text pt={1} color={"#A097BF"} fontSize={"15px"}>
                Player :
              </Text>
              <Text>{`${"sdkjsdf"}`}</Text>
            </HStack>
            <HStack>
              <Text pt={1} color={"#A097BF"} fontSize={"15px"}>
                Phone :
              </Text>
              <Text>{`${"card.phone"}`}</Text>
            </HStack>
          </Flex>
        </Box>
      </Flex>
      <Box position={"relative"}></Box>
    </Card>
  );
};

export default CardReservations;
