import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDrawer from "../../components/AdminFlow/AdminDrawer.jsx";
import { Box, Flex, Text } from "@chakra-ui/react";
import MainLayout from "../../components/layouts/MainLayout";
import AvatarWithRipple from "../../components/RippleAvatar.jsx";
import StatusIndicator from "../../components/StatusIndicator.jsx";
import Payment_Page from "../../components/AdminFlow/Payment_Page.jsx";
import Payment_Done from "../../components/AdminFlow/Payment_Done.jsx";
import Communities from "../community.jsx";
import Searchusernadd from "../../components/AdminFlow/Searchusernadd.jsx";
import searchUserNAddPage from "../searchUserNAddPage.jsx";
import ShowAllCommunity from "../../components/AdminFlow/ShowAllCommunity.jsx";
import No_user_Screen from "../../components/AdminFlow/No_user_Screen.jsx";
import Edit_Profile from "../Edit_Profile.jsx";
import Add_Community from "../../components/AdminFlow/Community_addition.jsx";
import { useSelector } from "react-redux";
import Dashboard from "../protectedRoutes/adminDashboard.jsx";
import { getDashboardLayout } from "../../components/layouts/admin.js";

const CommunityframeFlow = () => {
  // const [drop1, setDrop1] = useState(true);
  // const [we, setW] = useState("w-1/12");
  // const onclick = () => {
  //   setDrop1(!drop1);
  //   setW("w-1/6");
  // };
  // const currentPage = useSelector((state) => state.currentPage);
  // const [drop, setDrop] = useState(currentPage);
  // useEffect(() => {}, [currentPage]);
  // console.log(currentPage, drop);

  return (
    <Box px={"30px"}>
      <Box>
        {/* {drop === "Payment Page" && <Payment_Page />}
          {drop === "Payment Done" && <Payment_Done />}
          {drop === "No Users" && <No_user_Screen />}
          {drop === "Profile" && <Edit_Profile />}
          {drop === "View Community" && <ViewAllCommunity />}
          {drop == "Add Users" && <Searchusernadd />}
          {drop === "Add Community" && <Add_Community />}
          {drop === "Payment Successful" && <paymentSuccessful />}
          {drop === "Dashboard" && <Dashboard />}
          {drop === "All Users" && <Text>All users page</Text>} */}
        <Dashboard />
      </Box>
    </Box>
  );
};
CommunityframeFlow.getLayout = getDashboardLayout;
export default CommunityframeFlow;
