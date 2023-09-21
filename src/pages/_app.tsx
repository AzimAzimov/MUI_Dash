import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useMemo, useState } from "react";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import { Preloader } from "@/components/Preloader/Preloader";
import "../styles/global.scss";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const darkThemeChosen = useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [],
  );

  const lightThemeChosen = useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [],
  );

  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
      >
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          {loading && <Preloader />}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
