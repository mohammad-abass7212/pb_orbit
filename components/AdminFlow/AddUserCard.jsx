import {
  Box,
  Flex,
  Image,
  Card,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";

function AddUserCard({ userCardData }) {
  return userCardData.map((card) => {
    return (
      <>
        <Card
          height={"140px"}
          key={card.id}
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
                src={"https://bit.ly/dan-abramov"}
                alt={"communityIcons"}
                borderRadius={"50%"}
              />
            </Box>
            <Box>
              <Heading color={"white"} size="md" pt={2}>
                {card.name}
              </Heading>

              <HStack pt={1}>
                <Image
                  zIndex={1}
                  name={""}
                  src={"utils/Common/Location.svg"}
                  alt={"communityIcons"}
                  borderRadius={15}
                />
                <Text color={"#A097BF"}>{card.location}</Text>
              </HStack>
              <Flex gap={2}>
                <HStack>
                  <Text pt={1} color={"#A097BF"} fontSize={"15px"}>
                    Pickle ball play :
                  </Text>
                  <Text>{`${card.pickleballPlayStatus}`}</Text>
                </HStack>
                <HStack>
                  <Text pt={1} color={"#A097BF"} fontSize={"15px"}>
                    Phone :
                  </Text>
                  <Text>{`${card.phone}`}</Text>
                </HStack>
              </Flex>
            </Box>
          </Flex>
          <Box position={"relative"}></Box>
        </Card>
      </>
    );
  });
}

export default AddUserCard;
