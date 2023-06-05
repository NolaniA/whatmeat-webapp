import { createTheme } from "@mui/material/styles";
import "@fontsource/berkshire-swash";
import "@fontsource/prompt";
import Craftbg from "../src/assets/image/bgg.png";

const theme = createTheme({
  typography: {
    fontFamily: "prompt",
    fontSize: 18,
    h1: {
      fontFamily: "Berkshire Swash",
      fontSize: 72,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundColor: "#211413" },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          background: `url(${Craftbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: "50px",
          backgroundColor: "#FF5D5E",
          "&:hover": { backgroundColor: "black" },
        },
      },
    },
  },
});

export default theme;
