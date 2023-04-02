import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import Searchbar from "../components/AdminFlow/Searchbar";
import AddUserCard from "../components/AdminFlow/AddUserCard";
import RippleAvatar from "../components/RippleAvatar";
function addUserList() {
  const userCardData = [
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
    {
      name: "John Doe",
      location: "New York",
      pickleballPlayStatus: "Yes",
      phone: "555-1234",
    },
    {
      name: "Jane Smith",
      location: "Los Angeles",
      pickleballPlayStatus: "No",
      phone: "555-5678",
    },
    {
      name: "Bob Johnson",
      location: "Chicago",
      pickleballPlayStatus: "Yes",
      phone: "555-9012",
    },
  ];

  return (
    <Box bgColor={"#040016"}>
      <Box gap={10}>
        <Box position={"absolute"} right={0}>
          <RippleAvatar src={"/utils/Common/profileIcon.svg"} />
        </Box>
        <Flex justifyContent={"space-between"}>
          <Text
            pt={5}
            pl={5}
            textAlign={"center"}
            alignContent={"center"}
            fontSize={"20px"}
            color={"white"}
            fontFamily={"Poppins"}
          >
            All Users
          </Text>
          <Button
            bgColor={"#00E276"}
            color={"white"}
            _hover={{ bgColor: "#fe6601" }}
            width={"150px"}
            className="bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg"
          >
            Finish
          </Button>{" "}
        </Flex>
        <Box border={"1px solid #251A4B"}></Box>
        <Box pb={20} pt={2}>
          <Box position={"absolute"} right={0}>
            <Searchbar />
          </Box>
        </Box>
      </Box>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        justifyContent="center"
        alignItems="center"
        pl={40}
        pt={5}
        margin={"auto"}
      >
        <AddUserCard userCardData={userCardData} />
      </Grid>
    </Box>
  );
}

export default addUserList;
