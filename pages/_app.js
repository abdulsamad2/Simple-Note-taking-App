import Header from "@/components/Header";
import {SessionProvider, getSession} from "next-auth/react";

import "@/styles/globals.css";

export default function App({Component, pageProps}) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
