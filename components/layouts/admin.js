import AdminDrawer from "../AdminFlow/AdminDrawer";
import Sidebar from "../Sidebar/Sidebar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export function Admin({ children }) {
  const [drop1, setDrop1] = useState(true);
  const [active, setActive] = useState(false);
  const [we, setW] = useState("w-1/12");
  const onclick = () => {
    setDrop1(!drop1);
    setW("w-1/6");
  };
  const handleActive = () => {
    setActive(!active);
  };
  const currentPage = useSelector((state) => state.currentPage);
  const [drop, setDrop] = useState(currentPage);
  useEffect(() => {}, [currentPage]);
  console.log(currentPage, drop);
  return (
    <>
      <AdminDrawer
        onclick={onclick}
        drop1={drop1}
        setDrop={setDrop}
        drop={drop}
        setDrop1={setDrop1}
        active={active}
        handleActive={handleActive}
      />
      <AdminHeader drop={drop} drop1={drop1} />
      <div
        className="w-full px-8   
        pb-5 pt-20 sm:pt-28 lg:pt-[126px] "
        style={{
          marginLeft: drop1 ? "256px" : "88px",
          width: drop1 ? "85%" : "95%",
        }}
      >
        {children}
      </div>
    </>
  );
}
export const getDashboardLayout = function (page, pageProps) {
  return <Admin {...pageProps}>{page}</Admin>;
};

export default Admin;
