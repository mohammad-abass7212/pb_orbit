import React from "react";
import { Box } from "@chakra-ui/react";
import MainLayout from "../components/layouts/MainLayout";
import CardDetails from "../components/AdminFlow/CardDetail";
import CardReservations from "../components/AdminFlow/CardReservations";
import CommunityDetail from "../components/AdminFlow/CommunityDetail";

function exmple() {
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
        <CardDetails userCardData={userCardData} />
        <CommunityDetail />
      </Box>
    </MainLayout>
  );
}

export default exmple;
