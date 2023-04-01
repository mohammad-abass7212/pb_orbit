import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Flex,
  Box,
  Icon,
  HStack,
  Image,
} from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { IconContext } from "react-icons";

function CommonUserCard({ cards }) {
  return cards.map((card) => {
    return (
      <Card
        height={"140px"}
        key={card.id}
        borderRadius="15"
        alignItems="center"
        m={3}
        p={6}
        bgColor={"#26203A"}
        color={"white"}
        width={["470px"]}
      >
        <Flex mt={"-4%"}>
          <Box mr={6} width={"30%"}>
            <Image
              zIndex={1}
              name={""}
              src={"https://bit.ly/dan-abramov"}
              alt={"communityIcons"}
              borderRadius={15}
            />
          </Box>
          <Box width={["200px"]} pt={5}>
            <Heading color={"#A097BF"} size="md" pt={2}>
              {card.name}
            </Heading>
            <Text pt={1} fontWeight={600} fontSize={"20px"}>
              {card.location}
            </Text>
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
          </Box>
        </Flex>
      </Card>
    );
  });
}

export default CommonUserCard;
