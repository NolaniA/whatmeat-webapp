import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Home from "./page/home";
import Overview from "./page/overview";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="overview" element={<Overview />} />
        {/* <Route path="" element={<Page />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
