import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/icons/logo.png";
import dashboard_cion from "../../assets/icons/dashboard_icon.png";
import profile from "../../assets/icons/user.png";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  return (
    <aside
      className=" 
        lg:w-64 fixed left-0 top-0 h-full overflow-hidden z-[999]  duration-200 ease-in-out "
      id="sidebar"
    >
      <div className={`p-4 sm:p-9`}>
        <Link href="/">
          <Image src={logo} alt="logoo" className="w-32 h-auto sm:w-40" />
        </Link>
      </div>
      <ul
        className={`list-none pl-0 relative  lg:h-[calc(100vh_-_224px)] h-[calc(100vh_-_210px)] overflow-auto side_menu `}
      >
        <li
          className={`py-[14px] px-9 cursor-pointer `}
          onClick={() => {
            router.push("/admin/dashboard");
          }}
        >
          <Link
            href="/admin/dashboard"
            className="flex text-xs leading-[18px] font-normal items-end"
          >
            <Image src={dashboard_cion} alt="" className="w-5 h-5 mr-4" />{" "}
            dashboard
          </Link>
        </li>
        <li
          className={`py-[14px] px-9 cursor-pointer `}
          onClick={() => {
            router.push("/admin/dashboard");
          }}
        >
          <Link
            href="/admin/profile"
            className="flex text-xs leading-[18px] font-normal items-end"
          >
            <Image src={profile} alt="" className="w-5 h-5 mr-4" /> profile
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
