import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import Layout from "./layout"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/layout/Layout'
import theme from '@/theme'


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return   <ChakraProvider theme={theme} > <Layout> <Component {...pageProps} /> </Layout>  </ChakraProvider>
}
