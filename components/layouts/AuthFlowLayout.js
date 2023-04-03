import { Box } from "@chakra-ui/react";
import style from "../../styles/AuthflowLayout.module.css";

const AuthFlowLayout = ({ children }) => {
  return <Box className={style.container}>{children}</Box>;
};

export default AuthFlowLayout;
