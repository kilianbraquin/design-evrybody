import { darkTheme, globalStyles } from "@stitches";
import { ThemeContext, ThemeOption } from "contexts";
import { MenuContext } from "contexts/MenuContext";
import "destyle.css/destyle.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FC, useEffect, useState } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeOption>("light");

  useEffect(() => {
    globalStyles();
    setTheme(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    if (theme === "dark") document.body.className = darkTheme;
    return () => {
      document.body.className = "";
    };
  }, [theme]);

  useEffect(() => {
    if (activeMenu) {
      window.scrollTo({ top: 0 });
    }
  }, [activeMenu]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </MenuContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
