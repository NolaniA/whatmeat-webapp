import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Beef from "../assets/image/BEEF.png";
import PicTomato from "../assets/image/Tomatohome.png";
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
  tomatoContainer: {
    position: "absolute",
    bottom: "30px",
    right: "200px",
  },
};

const CutOfBeef = () => {
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
          <Typography variant="h1">THE BUTCHER’S GUIDE</Typography>
        </Grid>
        <Grid item sx={{ color: "#FF5D5E" }}>
          <Typography variant="h4">CUT OF BEEF</Typography>
        </Grid>
        <Grid item>
          <img src={Beef} alt="Beef" />
        </Grid>
      </Grid>
      <Box sx={styles.tomatoContainer}>
        <Link to="/overview">
          <img src={PicTomato} width="50px" height="50px" />
        </Link>
      </Box>
    </Box>
  );
};

export default CutOfBeef;