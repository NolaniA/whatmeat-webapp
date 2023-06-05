import React from "react";
import { ThemeProvider } from "@emotion/react";
import Theme from "./theme";
import Home from "./page/home";
import Overview from "./page/overview";
import { Route, Routes } from "react-router-dom";
import Cutofbeef from "./page/cutofbeef";
import Cutoflamb from "./page/cutoflamb";
import Cutofpork from "./page/cutofpork";
import Cutofchicken from "./page/cutofchicken";
import { Stack } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<Overview />} />
          <Route path="cutofbeef" element={<Cutofbeef />} />
          <Route path="cutoflamb" element={<Cutoflamb />} />
          <Route path="cutofpork" element={<Cutofpork />} />
          <Route path="cutofchicken" element={<Cutofchicken />} />
          {/* <Route path="" element={<Page />} /> */}
        </Routes>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
