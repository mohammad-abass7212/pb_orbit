import React from "react";
import Searchusernadd from "../../../components/AdminFlow/Searchusernadd";
import { getDashboardLayout } from "../../../components/layouts/admin";

const AddUser = () => {
  return (
    <div>
      <Searchusernadd />
    </div>
  );
};
AddUser.getLayout = getDashboardLayout;

export default AddUser;
