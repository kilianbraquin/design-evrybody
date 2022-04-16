import {
  MenuContext,
  NewsletterContext,
  ThemeContext,
  ThemeOption,
} from "@contexts";
import { darkTheme, globalStyles } from "@stitches";
import "destyle.css/destyle.min.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FC, useEffect, useState } from "react";
import "../public/fonts/style.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [displayNewsletterModal, setDisplayNewsletterModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
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
    if (theme === "dark") document.body.classList.add(darkTheme);
    return () => {
      document.body.classList.remove(darkTheme);
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
        <NewsletterContext.Provider
          value={{ displayNewsletterModal, setDisplayNewsletterModal }}
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </NewsletterContext.Provider>
      </MenuContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
