import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, lightBlue, red } from "@mui/material/colors";
import React from "react";

type Props = {
  children?: React.ReactElement;
};
export default function CustomStyles({ children }: Props) {
  const primary = {
    main: red[500],
    contrastText: "#fff",
  };
  const secondary = {
    main: grey[800],
    contrastText: "#fff",
  };
  const theme = createTheme({
    palette: {
      primary,
      secondary,
    },
    typography: {
      fontFamily: ["Roboto", "Arial", '"Segoe UI"'].join(","),
      h1: {
        fontWeight: "bold",
        fontSize: 16,
      },
      h2: { fontSize: 8, fontStyle: "italic" },
    },
    components: {
      MuiListItemButton: {
        variants: [
          {
            props: { color: "colored" },
            style: {
              backgroundColor: primary.main,
              color: primary.contrastText,
              fontWeight: "bold",
              "&:hover": {
                color: primary.main,
              },
            },
          },
        ],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
