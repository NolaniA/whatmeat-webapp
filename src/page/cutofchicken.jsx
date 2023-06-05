import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Chicken from "../assets/image/CHICK.png";
import TomatoBack from "../component/Layout";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    paddingRight: "20px", // เพิ่มระยะขวาของ Box
    paddingLeft: "20px", // เพิ่มระยะซ้ายของ Box
  },
  tomatoContainer: {
    position: "absolute",
    Typography: { alignProperty: "center" },
    bottom: "30px",
    right: "20px",
    transition: "transform 0.3s", // เพิ่ม transition effect
    "&:hover": {
      transform: "scale(1.2)", // เพิ่ม transform scale เมื่อ hover
    },
  },
};

const CutOfChicken = () => {
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
          <Typography variant="h4">CUT OF CHICKEN</Typography>
        </Grid>
        <Grid item>
          <img src={Chicken} alt="chicken" width="600px" />
        </Grid>
      </Grid>
      <TomatoBack />
    </Box>
  );
};

export default CutOfChicken;
