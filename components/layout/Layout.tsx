import { Box } from "@chakra-ui/react";
import { Props } from "next/script";
import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Box bg="#050017" style={{ fontFamily: "Poppins, sans-serif" }}>
      {children}
    </Box>
  );
};

export default Layout;
