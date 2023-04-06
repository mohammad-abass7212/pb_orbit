import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AvatarWithRipple from "../RippleAvatar";
import StatusIndicator from "../StatusIndicator";

const AdminHeader = ({ drop, drop1 }) => {
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        header.classList.add("Admin_nav_bg_black");
      } else {
        header.classList.remove("Admin_nav_bg_black");
      }
    });

    return () => {
      window.removeEventListener("bg_black", handleScroll);
    };
  }, []);
  return (
    <Box
      className=" py-5 fixed left-0 w-full right-12 "
      style={{ marginLeft: drop1 ? "256px" : "88px" }}
      id="navbar"
    >
      <Box>
        <Box
          className="  pb-5 flex  items-center justify-between   "
          style={{ width: "84%" }}
        >
          <Box
            className=" ml-8"
            style={{ color: "white", marginBlock: "-10px" }}
          >
            {drop}
          </Box>
          <Box className="flex ">
            {" "}
            <AvatarWithRipple src={"https://bit.ly/dan-abramov"} />
            <StatusIndicator
              isActive={true}
              activeColor="green.500"
              inactiveColor="gray.500"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AdminHeader;
