import "@/styles/globals.css";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isNavigating = React.useRef(false);

  React.useEffect(() => {
    const handleStart = () => {
      isNavigating.current = true;
    };
    const handleComplete = () => {
      isNavigating.current = false;
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: { opacity: 1 },
      }}
    >
      <HydrationProvider>
        <ChakraProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Server></Server>
            <AnimatePresence exitBeforeEnter>
              <Client>
                <Component {...pageProps} />
              </Client>
            </AnimatePresence>
          </ThemeProvider>
        </ChakraProvider>
      </HydrationProvider>
    </motion.div>
  );
}
