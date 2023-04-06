import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../reduxStore/store";
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
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}
      >
        <HydrationProvider>
          <Provider store={store}>
            <ChakraProvider theme={theme}>
              <ThemeProvider theme={theme}>
                <Server></Server>
<<<<<<< HEAD
                <AnimatePresence true>
                  <Client>
                    <Component {...pageProps} />
                  </Client>
=======
                <AnimatePresence exitBeforeEnter>
                  <Client>{getLayout(<Component {...pageProps} />)}</Client>
>>>>>>> a7ad2469b2f9cb581ea09d375161a9f0075264ad
                </AnimatePresence>
              </ThemeProvider>
            </ChakraProvider>
          </Provider>
        </HydrationProvider>
      </motion.div>
    </>
  );
}
