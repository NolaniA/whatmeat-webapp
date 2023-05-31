import { createTheme } from "@mui/material/styles";
import "@fontsource/berkshire-swash";
// import CraftBg from "./assets/image/bgs.png";

const theme = createTheme({
  typography: {
    fontFamily: "Berkshire Swash",
    caption: { fontFamily: "sans-serif", fontSize: "18px", letterSpacing: 0.5 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: { root: { backgroundColor: "#211413" } },
    },
    // MuiInput: {
    //     variants:
    //     // styleOverrides: {
    //     //     root: { backgroundColor: "#211413" }
    //     },
    // },
    // Name of the component ⚛️
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: "50px",
          backgroundColor: "#FF5D5E",
          "&:hover": { backgroundColor: "black" },
        },
      },
    },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       body: {
    //         backgroundImage: `url(${CraftBg})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundSize: "cover",
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
