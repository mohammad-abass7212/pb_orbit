import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
// import MainLayout from "../../../components/layouts/MainLayout";
// import AvatarWithRipple from "../../../components/RippleAvatar.jsx";
// import StatusIndicator from "../../../components/StatusIndicator.jsx";
// import Payment_Page from "../../../components/AdminFlow/Payemnt_Page.jsx";
// import Payment_Done from "../../../components/AdminFlow/Payment_Done.jsx";
// import Communities from "../../community.jsx";
import Searchusernadd from "../../../components/AdminFlow/Searchusernadd.jsx";
// import searchUserNAddPage from "../../searchUserNAddPage.jsx";
// import ViewAllCommunity from "../../../components/AdminFlow/ViewAllCommunity.jsx";
// import No_user_Screen from "../../../components/AdminFlow/No_user_Screen.jsx";
// import Edit_Profile from "../../Edit_Profile.jsx";
// import Add_Community from "../../../components/AdminFlow/Community_additiion.jsx";
// import { useSelector } from "react-redux";
import Dashboard from "../../protectedRoutes/adminDashboard.jsx";
import { getDashboardLayout } from "../../../components/layouts/admin.js";

const AdminDashboard = () => {
  return (
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

      {/* {drop == "Add Users" && <Searchusernadd />} */}
      <Dashboard />
    </Box>
  );
};
AdminDashboard.getLayout = getDashboardLayout;
export default AdminDashboard;
