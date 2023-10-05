import { createTheme } from "@mui/material";

declare module "@mui/material" {
  interface ThemeOptions {
    orange: {
      main: string;
    };

    whilte: {
      main: string;
    };

    dark: {
      main: string;
    };

    grey: {
      "50": string;
      "100": string;
      "200": string;
      "300": string;
      "500": string;
      "600": string;
      "700": string;
      "900": string;
    };
  }
}

export const themePalette = createTheme({
  orange: {
    main: "#FFA630",
  },

  whilte: {
    main: "#FFFFFF",
  },

  dark: {
    main: "#000000",
  },

  grey: {
    "50": "#f8fafc",
    "100": "#eef2f6",
    "200": "#e3e8ef",
    "300": "#cdd5df",
    "500": "#697586",
    "600": "#4b5565",
    "700": "#364152",
    "900": "#121926",
  },
});
