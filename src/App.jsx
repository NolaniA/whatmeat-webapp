import React from "react";
import Home from "./page/home";
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Choosemeat from "./page/choosemeat";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home />
      </Box>
    </ThemeProvider>
  );
};

export default App;
