import "styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3d3f3f",
      },
      secondary: {
        main: "#fffeff"
      }
    },
    typography: {
      fontFamily: "Noto Sans JP",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
