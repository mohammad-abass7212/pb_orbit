import React from "react";
import Tabview from "../components/AdminFlow/Tabview";
import CommunityDetail from "../components/AdminFlow/CommunityDetail";
import { Box, Flex, Text } from "@chakra-ui/react";
import RippleAvatar from "../components/RippleAvatar";
import { useState } from "react";
const Dashboard = () => {
  return (
    <Box bgColor={"#050017"}>
      <Flex justifyContent={"space-between"} padding={(0, 10)}>
        <CommunityDetail />
        <RippleAvatar src={"/utils/Common/Avatar.svg"} />
      </Flex>
      <Box border={"1px solid white"}></Box>
      <br />
      <Box>
        <Tabview firstTab={"All Users"} secondTab={"Request"} />
      </Box>
    </Box>
  );
};

export default Dashboard;
