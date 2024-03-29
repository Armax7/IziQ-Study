import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import * as Components from "../components";

export default function App({ Component, pageProps }) {
  return (
    <>    
      <Head>
        <title>IziQ-Study</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>📗 IziQ-Study</h1>
      </header>

      <ChakraProvider>
        <Components.Navigation/>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
