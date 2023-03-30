import React, { useState } from "react";
import AdminDrawer from "../components/AdminFlow/AdminDrawer";
// import Add_Community from "./../components/Add_Community";
import MainLayout from "@/components/layouts/MainLayout";
import No_user_Screen from "./No_user_Screen";
import Edit_Profile from "./Edit_Profile";
import Payment_Done from "./Payment_Done";
import adminDashboard from "./protectedRoutes/adminDashboard";
import payment_Page from "./protectedRoutes/payment_Page";
import SuccessMyRservations from "./SuccessMyRservations";
import Not404 from "./404";
import Add_Community from "../components/AdminFlow/Add_Community";
import Communities from "./Communities";
import createCommunity from "./createCommunity";
const SecondPage = () => {
  const [drop1, setDrop1] = useState(false);
  const [we, setW] = useState("w-1/12");
  const onclick = () => {
    setDrop1(!drop1);
    setW("w-1/6");
  };

  return (
    <div className="flex gap-10">
      <div
        className={
          drop1
            ? "w-1/6 border-r-2 pb-5 hidden sm:block"
            : "w-1/12 border-r-2 pb-5 hidden sm:block"
        }
      >
        <AdminDrawer onclick={onclick} drop1={drop1} />
      </div>
      <div className="w-[80%] py-5">
        <div className=" border-b-2 pb-5 ">
          <div className="flex justify-end">
            {" "}
            <img src="/utils/common/Avatar.png" alt="" />{" "}
          </div>
          <div className="mt-10">Add Community</div>
        </div>
        <div />

        <div><Add_Community/></div> 
        {/* <Payment_Done/> */}
        {/* <Communities /> */}
        {/* <SuccessMyRservations/> */}
        {/* <Not404 /> */}
        {/* <Edit_Profile/> */}
        {/* <createCommunity /> */}
        {/* <No_user_Screen /> */}
        {/* <Payemnt_Page /> */}
      </div>
    </div>
  );
};

export default SecondPage;
