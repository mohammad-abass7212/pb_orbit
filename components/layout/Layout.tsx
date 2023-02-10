
import { Props } from "next/script";
import React from "react";

import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";


interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div>

      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};


export default Layout;
