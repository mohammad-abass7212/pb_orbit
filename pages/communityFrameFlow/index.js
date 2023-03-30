import React, { useState } from "react";
import AdminDrawer from "../../components/AdminFlow/AdminDrawer";
// import Add_Community from "./../components/Add_Community";
import Payment_Page from "../Payemnt_Page";
import No_user_Screen from "../No_user_Screen";
import Edit_Profile from "../Edit_Profile";
import Payment_Done from "../Payment_Done";
import SuccessMyRservations from "../SuccessMyRservations";
import Add_Community from "../../components/AdminFlow/Add_Community";
import Communities from "../../components/AdminFlow/Communities";
import MainLayout from "@/components/layouts/MainLayout";
const CommunityframeFlow = () => {
  const [drop1, setDrop1] = useState(false);
  const [we, setW] = useState("w-1/12");
  const onclick = () => {
    setDrop1(!drop1);
    setW("w-1/6");
  };
  const [addCommunityShow, setaddCommunityShow] = useState(true);
  const [payment_PageShow, setpayment_PageShow] = useState(false);
  const [reservationSucesShow, setRervationSucesShow] = useState(false);
  const [editProfileShow, setEditProfileShow] = useState(false);
  const [noUserShow, setNoUserShow] = useState(false);
  const [payment_Done, setPayment_Done] = useState(false);
  const [showCommunities, setShowCommunities] = useState(false);


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

          <div>
            {addCommunityShow && <Add_Community />}
            {payment_PageShow && <Payment_Page />}
            {payment_Done && <Payment_Done />}
            {showCommunities && <Communities />}
            {reservationSucesShow && <SuccessMyRservations />}
            {editProfileShow && <Edit_Profile />}
            {noUserShow && <No_user_Screen />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityframeFlow;
