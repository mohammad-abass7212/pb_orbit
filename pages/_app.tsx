import "@/styles/globals.css";
// import { FirebaseAuthProvider, FirestoreProvider } from 'next-firebase-auth';
import "firebase/auth";
import "firebase/firestore";

import "firebase/auth";
import "firebase/firestore";
import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/layout/Layout";

export default function App({
  Component,
  pageProps,
}: AppProps): JSX.Element | any {
  return (
    <HydrationProvider>
      <Server></Server>{" "}
      <ChakraProvider theme={theme}>        
        <ThemeProvider theme={theme}>
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
