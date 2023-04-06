import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box, useToast } from "@chakra-ui/react";
import Image from "next/image";
const AdminDrawer = ({ onclick, drop1, setDrop, drop }) => {
  const router = useRouter();
  const toast = useToast();

  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/authFlow/userSignin");
    toast({
      description: "Sucessfully logout out!",
      status: "sucess",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <>
      {drop1 ? (
        <Box className="w-[232px] border-r-2  fixed ml-6 left-0 top-0 h-full overflow-hidden z-[999]  duration-200 ease-in-out">
          <Box className="w-[220px] my-10">
            <Image
              className=""
              src="/utils/Common/logo.png"
              alt=""
              onClick={onclick}
              width={100}
              height={100}
            />
          </Box>
          <ul className="flex flex-col  font-thin font-sans uppercase text-[#6C6290]">
            <li
              onClick={() => setDrop("Dashboard")}
              className="hover:bg-white py-3 w-full"
            >
              <span className="flex gap-3">
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/dash.svg"
                  alt="pborbit_logo"
                />
                Dashboard
              </span>
            </li>

            <li
              onClick={() => setDrop("Profile")}
              className="hover:text-white py-3 w-full"
            >
              <span className="flex gap-3">
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/proflie.svg"
                  alt="pborbit_logo"
                />
                Profile
              </span>
            </li>
            <li
              onClick={() => setDrop("Add Users")}
              className="hover:text-white py-3 w-full"
            >
              <span className="flex gap-3">
                {/* <img src="/utils/common/sub.svg" alt="pborbit_logo" /> */}
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/sub.svg"
                  alt="pborbit_logo"
                />
                Add users
              </span>
            </li>
            <Box className="group">
              <li
                className="hover:text-hov py-3 w-full flex   "
                onClick={() => setDrop(!drop)}
              >
                <span className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src="/utils/common/com.svg"
                    alt="pborbit_logo"
                  />
                  Community
                </span>
                <span className=" ml-3">
                  {drop ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </span>
              </li>
              {drop && (
                <Box className=" pl-5 group-hover:block ">
                  <ul className="flex flex-col ">
                    <li
                      onClick={() => setDrop("Add Community")}
                      className="hover:text-white py-3 px-3 w-full"
                    >
                      Add Community
                    </li>
                    <li
                      onClick={() => setDrop("View Community")}
                      className="hover:text-white py-2 px-3 w-full"
                    >
                      View Community
                    </li>
                  </ul>
                </Box>
              )}
            </Box>

            <Box className="group">
              <li className="hover:text-white py-3 w-full flex justify-between">
                <span className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src="/utils/common/reser.svg"
                    alt="reser"
                  />{" "}
                  Reservations
                </span>
              </li>
            </Box>

            <li className="hover:text-white py-3 w-full">
              <span className="flex gap-3">
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/noti.svg"
                  alt="noti"
                />
                Notification
              </span>
            </li>

            <Box className="group">
              <li
                onClick={handleLogout}
                className="hover:text-white py-3 w-full flex justify-between"
              >
                <span className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src="/utils/common/logout.svg"
                    alt="logout"
                  />
                  Logout
                </span>
              </li>
            </Box>
          </ul>
        </Box>
      ) : (
        <Box
          className={` border-r-2  min-h-screen ml-8   fixed  left-0 top-0 h-full overflow-hidden z-[999]  duration-200 ease-in-out ${
            drop1 ? "w-64" : "w-14"
          } `}
        >
          <Box className="w-8 my-10  ">
            <Box onClick={onclick}>
              <GiHamburgerMenu className="invert" />{" "}
            </Box>
          </Box>
          <ul className="flex flex-col  font-thin font-sans uppercase text-[#6C6290]">
            <li onClick={() => setDrop()} className=" py-2  w-full">
              <span className="flex gap-3">
                <Image
                  src="/utils/common/dash.svg"
                  alt="pborbit_logo"
                  width={20}
                  height={20}
                />
              </span>
            </li>

            <li
              onClick={() => setDrop()}
              className="hover:text-white py-2 w-full"
            >
              <span className="flex gap-3">
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/proflie.svg"
                  alt="pborbit_logo"
                />
              </span>
            </li>
            <li
              onClick={() => setDrop()}
              className="hover:text-white py-2  w-full"
            >
              <span className="flex gap-3">
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/sub.svg"
                  alt="pborbit_logo"
                />
              </span>
            </li>
            <Box className="group">
              <li
                className="hover:text-hov py-2 w-full flex gap-3 "
                onClick={() => setDrop(!drop)}
              >
                <span className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src="/utils/common/com.svg"
                    alt="pborbit_logo"
                  />
                </span>
                <span className="">
                  {drop ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowRight />
                  )}
                </span>
              </li>
              {drop ||
                (drop1 && (
                  <Box className=" pl-5 group-hover:block ">
                    <ul className="flex flex-col ">
                      <li
                        onClick={() => setDrop()}
                        className="hover:text-white py-2 px-3 w-full"
                      >
                        Add Community
                      </li>
                      <li
                        onClick={() => setDrop()}
                        className="hover:text-white py-2 px-3 w-full"
                      >
                        View Community
                      </li>
                    </ul>
                  </Box>
                ))}
            </Box>

            <Box className="group">
              <li className="hover:text-white py-2  w-full flex justify-between">
                <span className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src="/utils/common/reser.svg"
                    alt="reser"
                  />{" "}
                </span>
              </li>
            </Box>

            <li className="hover:text-white py-2  w-full">
              <span className="flex gap-3">
                <Image
                  width={20}
                  height={20}
                  src="/utils/common/noti.svg"
                  alt="noti"
                />
              </span>
            </li>

            <Box className="group">
              <li className="hover:text-white py-2  w-full flex justify-between">
                <span className="flex gap-3">
                  <Image
                    width={20}
                    height={20}
                    src="/utils/common/logout.svg"
                    alt="logout"
                  />
                </span>
              </li>
            </Box>
          </ul>
        </Box>
      )}
    </>
  );
};

export default AdminDrawer;
