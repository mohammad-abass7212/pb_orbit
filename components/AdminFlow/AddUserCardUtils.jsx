import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@chakra-ui/react";
function AddUserCardUtils({ data }) {
  // console.log("data...........", data);
  const AvatarSrc = data.profile_picture;
  return (
    <Box width={"400px"} pl={"5"}>
      {" "}
      <HStack>
        <Box>
          {" "}
          <Avatar
            size={"sm"}
            alt="userIcon"
            src={
              AvatarSrc ||
              "https://tse4.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&P=0https://tse4.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&P=0"
            }
          />
        </Box>
        <VStack alignItems={"left"}>
          <Text fontSize={"18px"} fontFamily={"Lato"}>
            {data.first_name == "" ? data.username : data.first_name + " " + data.last_name}
          </Text>
          <Text fontSize={"12px"} color={"#A097BF"} fontFamily={"Lato"}>
            Player
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default AddUserCardUtils;
