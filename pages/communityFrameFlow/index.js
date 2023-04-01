import React, { useState } from "react";
import AdminDrawer from "../../components/AdminFlow/AdminDrawer";
// import Add_Community from "./../components/Add_Community";
import ViewAllCommunity from "../../components/AdminFlow/viewAllCommunity";
import Payment_Page from "../Payemnt_Page";
import No_user_Screen from "../No_user_Screen";
import Edit_Profile from "../Edit_Profile";
import Payment_Done from "../Payment_Done";
import SuccessMyRservations from "../SuccessMyRservations";
import Add_Community from "../../components/AdminFlow/Add_Community";
import Communities from "../../components/AdminFlow/Communities";
import MainLayout from "@/components/layouts/MainLayout";
import CommonUserCard from "@/components/AdminFlow/CommonUserCard";
import AvatarWithRipple from "../../components/RippleAvatar";
import StatusIndicator from "../../components/StatusIndicator";
import Searchbar from "@/components/AdminFlow/Searchbar";

const CommunityframeFlow = () => {
  const [drop1, setDrop1] = useState(true);
  const [we, setW] = useState("w-1/12");
  const onclick = () => {
    setDrop1(!drop1);
    setW("w-1/6");
  };
  const [drop, setDrop] = useState("Add Community");
  // const [addCommunityShow, setaddCommunityShow] = useState(true);
  // const [payment_PageShow, setpayment_PageShow] = useState(false);
  // const [reservationSucesShow, setRervationSucesShow] = useState(false);
  // const [editProfileShow, setEditProfileShow] = useState(false);
  // const [noUserShow, setNoUserShow] = useState(false);
  // const [payment_Done, setPayment_Done] = useState(false);
  // const [showCommunities, setShowCommunities] = useState(false);
  console.log(drop);

  return (
    <MainLayout>
      <div className="flex gap-10">
        <div
          className={
            drop1
              ? "w-1/6 border-r-2 pb-5 hidden sm:block"
              : "w-1/12 border-r-2 pb-5 hidden sm:block"
          }
        >
          <AdminDrawer
            onclick={onclick}
            drop1={drop1}
            setDrop={setDrop}
            drop={drop}
          />
        </div>
        <div className="w-[80%] py-5">
          <div className=" border-b-2 pb-5 ">
            <div className="flex justify-end" style={{ zIndex: 1 }}>
              {" "}
              <AvatarWithRipple src={"https://bit.ly/dan-abramov"} />
              <StatusIndicator
                isActive={true}
                activeColor="green.500"
                inactiveColor="gray.500"
              />
            </div>
            <div
              className="mt-10"
              style={{ color: "white", marginBlock: "-10px" }}
            >
              {drop}
            </div>
          </div>
          <div />

          <div>
            {/* {addCommunityShow && <Add_Community />} */}
            {/* {payment_PageShow && <Payment_Page />}
            {payment_Done && <Payment_Done />}
            {showCommunities && <Communities />}
            {reservationSucesShow && <SuccessMyRservations />}
            {editProfileShow && <Edit_Profile />}
            {noUserShow && <No_user_Screen />} */}
            {drop === "ViewAllCommunity" && <ViewAllCommunity />}
            {drop === "Profile" && <Edit_Profile />}
            {drop === "Add Community" && <Add_Community />}
            {drop === "View Community" && <ViewAllCommunity />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityframeFlow;
