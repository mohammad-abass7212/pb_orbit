import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import Layout from "./layout"
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/Layout";
import theme from "@/theme";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { ThemeProvider } from "styled-components";

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
