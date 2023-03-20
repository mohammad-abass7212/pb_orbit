import "@/styles/globals.css";
// import { FirebaseAuthProvider, FirestoreProvider } from 'next-firebase-auth';
import "firebase/auth";
import "firebase/firestore";

import "firebase/auth";
import "firebase/firestore";
import  { AppProps } from "next/app";
// import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/layout/Layout";
import Router from "next/router";
import { useEffect, useState } from "react";
export default function App({
  Component,
  pageProps,
}) {
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log("loading new page");
      setLoadingPage(false);
    };

    const end = () => {
      console.log("loaded new page!");
      setLoadingPage(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <HydrationProvider>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
        <Server></Server>{" "}
          <Client>
            {" "}
            <Layout>
              {" "}
              <Component {...pageProps} />{" "}
            </Layout>{" "}
          </Client>
        </ThemeProvider>
      </ChakraProvider>
    </HydrationProvider>
  );
}
