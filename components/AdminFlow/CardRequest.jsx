import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardRequest = ({ userCardData }) => {
  console.log(userCardData);
  return userCardData.map((card) => {
    return (
      <>
        <Box padding={5} id={card.id}>
          <Box className=" sm:flex justify-between text-sm rounded-lg bg-[#26203A] py-10 sm:px-5">
            <Box className="flex gap-4 ">
              <Box>
                {" "}
                <Image src="/utils/common/Avatar.png" alt="AvatarIcon" />{" "}
              </Box>
              <Box>
                <Text fontFamily={"poppins"} color={"white"}>
                  {card.name}
                </Text>
                <Text
                  fontFamily={"poppins"}
                  color={"#5B4F82"}
                  className="text-[#BDB8CF]"
                >
                  Player
                </Text>
                <Box className="sm:flex sm:gap-8 mt-4">
                  {" "}
                  <Box className="flex gap-2 ">
                    {" "}
                    <Image
                      src="/utils/common/msm.svg"
                      alt={"commonIcon"}
                    />{" "}
                    <Text color={"white"} fontFamily={"lato"}>
                      {card.phone}
                    </Text>{" "}
                  </Box>{" "}
                  <Box className="flex gap-2">
                    {" "}
                    <Image src="/utils/common/msm.svg" alt="Common" />{" "}
                    <Text color={"white"} fontFamily={"lato"}>
                      {card.email}
                    </Text>
                  </Box>{" "}
                </Box>
              </Box>
            </Box>
            <Flex>
              {" "}
              <Button
                bgColor={"#00E276"}
                color={"white"}
                _hover={{ bgColor: "#fe6601" }}
                width={"150px"}
                className="bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg"
              >
                Accept
              </Button>{" "}
              <Button
                bgColor={"#D94545"}
                color={"white"}
                width={"150px"}

                _hover={{ bgColor: "#fe6601" }}
                className="bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg"
              >
                Decline
              </Button>{" "}
            </Flex>
          </Box>
        </Box>
      </>
    );
  });
};

export default CardRequest;
