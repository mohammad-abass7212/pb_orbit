import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const AdminDrawer = ({ onclick, drop1, setDrop, drop }) => {
  return (
    <>
      {drop1 ? (
        <div>
          <div className="w-40 my-10">
            <img
              className=""
              src="/utils/Common/logo.png"
              alt=""
              onClick={onclick}
            />
          </div>
          <ul className="flex flex-col  font-thin font-sans uppercase text-[#6C6290]">
            <li
              onClick={() => setDrop("Dashboard")}
              className="hover:bg-white py-2 px-4 w-full"
            >
              <span className="flex gap-3">
                <img src="/utils/common/dash.svg" alt="pborbit_logo" />
                Dashboard
              </span>
            </li>

            <li
              onClick={() => setDrop("Profile")}
              className="hover:text-white py-2 px-4 w-full"
            >
              <span className="flex gap-3">
                <img src="/utils/common/proflie.svg" alt="pborbit_logo" />
                Profile
              </span>
            </li>
            <li
              onClick={() => setDrop()}
              className="hover:text-white py-2 px-4 w-full"
            >
              <span className="flex gap-3">
                <img src="/utils/common/sub.svg" alt="pborbit_logo" />
                Subscription
              </span>
            </li>
            <div className="group">
              <li
                className="hover:text-hov py-2 px-4 w-full flex justify-between  "
                onClick={() => setDrop(!drop)}
              >
                <span className="flex gap-3">
                  <img src="/utils/common/com.svg" alt="pborbit_logo" />
                  Community
                </span>
                <span className="">
                  {drop ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </span>
              </li>
              {drop && (
                <div className=" pl-5 group-hover:block ">
                  <ul className="flex flex-col ">
                    <li
                      onClick={() => setDrop("Add Community")}
                      className="hover:text-white py-2 px-8 w-full"
                    >
                      Add Community
                    </li>
                    <li
                      onClick={() => setDrop("View Community")}
                      className="hover:text-white py-2 px-8 w-full"
                    >
                      View Community
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="group">
              <li className="hover:text-white py-2 px-4 w-full flex justify-between">
                <span className="flex gap-3">
                  <img src="/utils/common/reser.svg" alt="reser" /> Reservations
                </span>
              </li>
            </div>

            <li className="hover:text-white py-2 px-4 w-full">
              <span className="flex gap-3">
                <img src="/utils/common/noti.svg" alt="noti" />
                Notification
              </span>
            </li>

            <div className="group">
              <li className="hover:text-white py-2 px-4 w-full flex justify-between">
                <span className="flex gap-3">
                  <img src="/utils/common/logout.svg" alt="logout" />
                  Logout
                </span>
              </li>
            </div>
          </ul>
        </div>
      ) : (
        <div>
          <div className="w-80 my-10">
            {/* <img className="" src="/utils/Common/logo.png" alt=""  /> */}
            <div onClick={onclick} className="ml-5">
              {" "}
              <GiHamburgerMenu />{" "}
            </div>
          </div>
          <ul className="flex flex-col  font-thin font-sans uppercase text-[#6C6290]">
            <li onClick={() => setDrop()} className=" py-2 px-4 w-full">
              <span className="flex gap-3">
                <img src="/utils/common/dash.svg" alt="pborbit_logo" />
              </span>
            </li>

            <li
              onClick={() => setDrop()}
              className="hover:text-white py-2 px-4 w-full"
            >
              <span className="flex gap-3">
                <img src="/utils/common/proflie.svg" alt="pborbit_logo" />
              </span>
            </li>
            <li
              onClick={() => setDrop()}
              className="hover:text-white py-2 px-4 w-full"
            >
              <span className="flex gap-3">
                <img src="/utils/common/sub.svg" alt="pborbit_logo" />
              </span>
            </li>
            <div className="group">
              <li
                className="hover:text-hov py-2 px-4 w-full flex gap-3 "
                onClick={() => setDrop(!drop)}
              >
                <span className="flex gap-3">
                  <img src="/utils/common/com.svg" alt="pborbit_logo" />
                </span>
                <span className="">
                  {drop ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </span>
              </li>
              {drop && (
                <div className=" pl-5 group-hover:block ">
                  <ul className="flex flex-col ">
                    <li
                      onClick={() => setDrop()}
                      className="hover:text-white py-2 px-8 w-full"
                    >
                      Add Community
                    </li>
                    <li
                      onClick={() => setDrop()}
                      className="hover:text-white py-2 px-8 w-full"
                    >
                      View Community
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="group">
              <li className="hover:text-white py-2 px-4 w-full flex justify-between">
                <span className="flex gap-3">
                  <img src="/utils/common/reser.svg" alt="reser" />{" "}
                </span>
              </li>
            </div>

            <li className="hover:text-white py-2 px-4 w-full">
              <span className="flex gap-3">
                <img src="/utils/common/noti.svg" alt="noti" />
              </span>
            </li>

            <div className="group">
              <li className="hover:text-white py-2 px-4 w-full flex justify-between">
                <span className="flex gap-3">
                  <img src="/utils/common/logout.svg" alt="logout" />
                </span>
              </li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default AdminDrawer;
