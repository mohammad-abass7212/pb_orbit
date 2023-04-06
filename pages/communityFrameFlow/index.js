import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDrawer from "../../components/AdminFlow/AdminDrawer.jsx";
import { Box, Flex, Text } from "@chakra-ui/react";
import MainLayout from "../../components/layouts/MainLayout";
import AvatarWithRipple from "../../components/RippleAvatar.jsx";
import StatusIndicator from "../../components/StatusIndicator.jsx";
import Payment_Page from "../../components/AdminFlow/Payemnt_Page.jsx";
import Payment_Done from "../../components/AdminFlow/Payment_Done.jsx";
import Communities from "../community.jsx";
import Searchusernadd from "../../components/AdminFlow/Searchusernadd.jsx";
import searchUserNAddPage from "../searchUserNAddPage.jsx";
import ViewAllCommunity from "../../components/AdminFlow/ViewAllCommunity.jsx";
import No_user_Screen from "../../components/AdminFlow/No_user_Screen.jsx";
import Edit_Profile from "../Edit_Profile.jsx";
import Add_Community from "../../components/AdminFlow/Add_Community.jsx";
import { useSelector } from "react-redux";
import Dashboard from "../protectedRoutes/adminDashboard.jsx";

const CommunityframeFlow = () => {
  const [drop1, setDrop1] = useState(true);
  const [we, setW] = useState("w-1/12");
  const onclick = () => {
    setDrop1(!drop1);
    setW("w-1/6");
  };
  console.log(drop1, "drop1>>>>>");
  const currentPage = useSelector((state) => state.currentPage);
  const [drop, setDrop] = useState(currentPage);
  useEffect(() => {}, [currentPage]);
  console.log(currentPage, drop);

  return (
    <MainLayout>
      <Flex>
        <AdminDrawer
          onclick={onclick}
          drop1={drop1}
          setDrop={setDrop}
          drop={drop}
        />
        <Box
          className={
            drop1
              ? " border-r-2 pb-5 hidden sm:block"
              : " border-r-2 pb-5 hidden sm:block"
          }
        ></Box>
        <Box className="w-[100%] py-5">
          <Box className=" border-b-2 pb-5 ">
            <Box className="flex justify-end" style={{ zIndex: 1 }}>
              {" "}
              <AvatarWithRipple src={"https://bit.ly/dan-abramov"} />
              <StatusIndicator
                isActive={true}
                activeColor="green.500"
                inactiveColor="gray.500"
              />
            </Box>
            <Box
              className="mt-10"
              style={{ color: "white", marginBlock: "-10px" }}
            >
              {drop}
            </Box>
          </Box>
          <Box />

          <Box>
            {drop === "Payment Page" && <Payment_Page />}
            {drop === "Payment Done" && <Payment_Done />}
            {drop === "No Users" && <No_user_Screen />}
            {drop === "Profile" && <Edit_Profile />}
            {drop === "View Community" && <ViewAllCommunity />}
            {drop == "Add Users" && <Searchusernadd />}
            {drop === "Add Community" && <Add_Community />}
            {drop === "Payment Successful" && <paymentSuccessful />}
            {drop === "Dashboard" && <Dashboard />}
            {drop === "All Users" && <Text>All users page</Text>}
          </Box>
        </Box>
      </Flex>
    </MainLayout>
  );
};

export default CommunityframeFlow;
