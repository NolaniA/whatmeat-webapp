import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Home from "./page/home";
import Overview from "./page/overview";
import { Route, Routes } from "react-router-dom";
import Cutofbeef from "./page/cutofbeef";
import Cutoflamb from "./page/cutoflamb";
import Cutofpork from "./page/cutofpork";
import Cutofchicken from "./page/cutofchicken";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="overview" element={<Overview />} />
        <Route path="cutofbeef" element={<Cutofbeef />} />
        <Route path="cutoflamb" element={<Cutoflamb />} />
        <Route path="cutofpork" element={<Cutofpork />} />
        <Route path="cutofchicken" element={<Cutofchicken />} />
        {/* <Route path="" element={<Page />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
