import { Box } from "@chakra-ui/react";
import { Props } from "next/script";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const MainLayout = ({ children }) => {
  return (
    <Box
      bg="#050017"
      bgColor={"#050017"}
      height={"100vh"}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="
                    flex flex-col items-start w-full 
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
      >
        {children}
      </motion.main>
    </Box>
  );
};

export default MainLayout;
