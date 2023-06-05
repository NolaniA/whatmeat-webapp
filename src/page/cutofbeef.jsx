import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Beef from "../assets/image/BEEF.png";
import TomatoBack from "../component/Layout";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "20px", // เพิ่มระยะขวาของ Box
  },
};

const CutOfBeef = () => {
  return (
    <Stack height="100vh">
      <Grid container spacing={2} marginY={10} sx={styles.container}>
        <Grid item xs={12} sx={{ color: "#FF5D5E" }} textAlign={"center"}>
          <Typography variant="h1" m={3}>
            The Butcher's Guide
          </Typography>
          <Typography variant="h4" fontSize={25} fontWeight={700}>
            CUT OF BEEF
          </Typography>
        </Grid>
        <Grid item>
          <img src={Beef} alt="Beef" />
        </Grid>
        <TomatoBack />
      </Grid>
    </Stack>
  );
};

export default CutOfBeef;
