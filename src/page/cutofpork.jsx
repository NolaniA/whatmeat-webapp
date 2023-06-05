import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Pork from "../assets/image/PORK.png";
import TomatoBack from "../component/Layout";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    paddingRight: "20px", // เพิ่มระยะขวาของ Box
    paddingLeft: "20px", // เพิ่มระยะซ้ายของ Box
  },
};

const CutOfPork = () => {
  return (
    <Box sx={styles.container}>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        marginTop={10}
        marginBottom={10}
      >
        <Grid item sx={{ color: "#FF5D5E" }}>
          <Typography variant="h1">The Butcher's Guide</Typography>
        </Grid>
        <Grid item sx={{ color: "#FF5D5E" }}>
          <Typography variant="h4">CUT OF PORK</Typography>
        </Grid>
        <Grid item>
          <img src={Pork} alt="Pork" />
        </Grid>
      </Grid>
      <TomatoBack />
    </Box>
  );
};

export default CutOfPork;
