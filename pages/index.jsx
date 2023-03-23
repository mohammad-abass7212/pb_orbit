import Head from "next/head";
// import { Inter } from "@next/font/google";

import {
  Box,
  Image,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
// import Home from "./home";
// declare module "react-Reveal";
// const inter = Inter({ subsets: ["latin"] });

function Homee() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <main>
          <Box bg="#050017" color={"white"}>
            <Image
              position="absolute"
              w={["65%", "65%", "65%", "65%", "65%"]}
              right={["1px", "1px", "1px", "1px", "10px"]}
              top={["0px", "0px", "0px", "0px", "-1px"]}
              zIndex="1"
              src="/utils/Common/banner-1.png"
              alt="pborbit"
            />

            <Image
              style={{
                position: "absolute",
                right: "-20px",
                // left: "1140px",
                top: "940px",
                zIndex: 1,
              }}
              src="/utils/Common/half-circle.png"
              alt="pborbit"
            />
            {/* leading page */}
            <Home />
          </Box>
        </main>
      </AnimatePresence>
    </Box>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      message: "Home Page",
    },
  };
}
export default Homee;