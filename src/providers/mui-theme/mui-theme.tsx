"use client";

import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import {
  CssBaseline,
  Theme,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
        },
      },
    },
  },
};

export const defaultTheme = createTheme(themeOptions);

export function WrapThemeProvider({
  children,
  theme,
}: {
  children: any;
  theme: Theme;
}): JSX.Element {
  return (
    <AppRouterCacheProvider options={{ key: "wcpcss" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
