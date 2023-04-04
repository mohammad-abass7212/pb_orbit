import React from "react";
import { Box } from "@chakra-ui/react";
import MainLayout from "../components/layouts/MainLayout";
import CardDetails from "../components/AdminFlow/CardDetail";
import CardReservations from "../components/AdminFlow/CardReservations";
import CommunityDetail from "../components/AdminFlow/CommunityDetail";
import AddUserCard from "../components/AdminFlow/AddUserCard";
import Add_Community from "../components/AdminFlow/Add_Community";
import AddUserCardUtils from "../components/AdminFlow/AddUserCardUtils";
import CardDetail from "../components/AdminFlow/CardDetail";
import CardRequest from "../components/AdminFlow/CardRequest";
import CommonUserCard from "../components/AdminFlow/CommonUserCard";
import Payment_Done from "../components/AdminFlow/Payment_Done";
import SearchUserNAdd from "../components/AdminFlow/SearchUserNAdd";
import Tabview from "../components/AdminFlow/Tabview";
import UserCard from "../components/AdminFlow/UserCard";
import viewAllCommunity from "../components/AdminFlow/viewAllCommunity";

AddUserCardUtils;
const exmple = () => {
  const userCardData = [
    {
      id: 1,
      name: "John Doe",
      phone: "555-1234",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-5678",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "555-9012",
      email: "bob.johnson@example.com",
    },
  ];
  return (
    <MainLayout>
      <Box height={"1000px"}>
        <AddUserCard userCardData={userCardData} />
        <CardReservations />
        {/* <CardDetails userCardData={userCardData} />
        <CommunityDetail />
        <Add_Community />
        <CardRequest />
        <CommonUserCard />
        <Payment_Done />
        <SearchUserNAdd />
        <UserCard /> */}
        {/* <TabviewAllCommunityview /> */}
      </Box>
    </MainLayout>
  );
};

export default exmple;
