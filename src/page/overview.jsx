import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography, colors } from "@mui/material";
import Picheadbeef from "../assets/image/Picheadbeef.png";
import Picheadpig from "../assets/image/Picheadpig.png";
import Picheadlamb from "../assets/image/Picheadlamb.png";
import Picheadchicken from "../assets/image/Picheadchicken.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  contentContainer: {
    margin: "0 20px",
    textAlign: "center",
  },
  gridContainer: {
    marginTop: "20px", // ระยะห่างด้านบนของ Grid container
    marginBottom: "20px", // ระยะห่างด้านล่างของ Grid container
  },
  imgContainer: {
    transition: "transform 0.3s", // เพิ่ม transition effect
    "&:hover": {
      transform: "scale(1.5)", // เพิ่ม transform scale เมื่อ hover
    },
  },
};

export default function AutoGrid() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentContainer}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={styles.gridContainer}
        >
          <Grid item xs sx={styles.imgContainer}>
            <Link to="/cutofbeef">
              <img src={Picheadbeef} alt="Beef" />
            </Link>
          </Grid>
          <Grid item xs={6} md={8}>
            <Typography variant="h1" sx={{ marginBottom: "30px" }}>
              The Butcher's Guide
            </Typography>
            <Typography variant="caption" sx={{ colors: "#AEB2BC" }}>
              Here are the categories of animals you can choose from to view the
              details of their meat cuts: Beef, Lamb, Pork and Chicken Please
              let me know which category you'd like to explore, and I'll provide
              you with the details of the meat cuts for that animal.
            </Typography>
            <Typography sx={{ marginTop: "30px" }}>
              <Button
                sx={{ width: "100px" }}
                variant="contained"
                component={Link}
                to="/"
              >
                Back
              </Button>
            </Typography>
          </Grid>
          <Grid item xs sx={styles.imgContainer}>
            <Link to="/cutofpork">
              <img src={Picheadpig} alt="Pig" />
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={styles.gridContainer}
        >
          <Grid item xs sx={styles.imgContainer}>
            <Link to="/cutoflamb">
              <img src={Picheadlamb} alt="Lamb" />
            </Link>
          </Grid>
          <Grid item xs sx={styles.imgContainer}>
            <Link to="/cutofchicken">
              <img src={Picheadchicken} alt="Chicken" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
